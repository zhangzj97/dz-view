import type { Router } from 'vue-router';
import { setRouteEmitter } from '../utils/route-listener';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {
  useSourceMenuStore,
  useSourceRouteStoreTool,
  useSourceRouteTabTagStore,
} from '@/hooks/useSourceStore';

NProgress.configure({ showSpinner: false });

const setupPageGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    if (!to.name) {
      // 不存在静态注册的
      // 尝试获取菜单资源
      const { getSource, initSourceImportRaw } = useSourceMenuStore();
      let { list } = getSource();

      if (list.length === 0) {
        // 先获取动态数据 如果有就去
        ({ list } = await initSourceImportRaw()); // TODO ({ list } = await refreshSource({}));
        const { menuToRoute } = useSourceRouteStoreTool();
        list.forEach((item: any) => {
          router.addRoute(item.scope, menuToRoute({ menu: item }));
        });
        router.getRoutes();
        next({ ...to, replace: true });
      } else if (list.length >= 0) {
        // 先获取动态数据 如果没有就到404
        next({ name: 'ExceptionPage404' });
      }

      return;
    } else if (to.name) {
      console.log(999, to);
      // 存在静态注册的
      // 访问特定的静态注册 比如404

      const { getSource, initSourceImportRaw } = useSourceMenuStore();
      let { list } = getSource();
      if (list.length === 0) {
        // 先获取动态数据 如果有就去
        ({ list } = await initSourceImportRaw()); // TODO ({ list } = await refreshSource({}));
        const { menuToRoute } = useSourceRouteStoreTool();
        list.forEach((item: any) => {
          router.addRoute(item.scope, menuToRoute({ menu: item }));
        });
        router.getRoutes();
      }
      // 存在数据了 才考虑 tabtag

      if (!to.meta.menu) {
        next();
        return;
      }
      // 处理 tab tag
      {
        const {
          setSource: setSourceRouteTabTag,
          getSource: getSourceRouteTabTag,
          changeVersion: changeVersionRouteTabTag,
        } = useSourceRouteTabTagStore();
        const { getSource: getSourceMenu } = useSourceMenuStore();

        let { list: listRouteTabTag } = getSourceRouteTabTag();
        const { list: listMenu } = getSourceMenu();

        listRouteTabTag.unshift(
          ...listMenu.filter((item: any) => item.tagFixed)
        );

        listRouteTabTag.push({ ...to.meta.menu });
        listRouteTabTag = listRouteTabTag.reduce(
          (previousValue: any[], currentValue: any) => {
            const { code } = currentValue;
            if (!previousValue.find(item => item.code === code)) {
              return [...previousValue, currentValue];
            }
            return previousValue;
          },
          []
        );

        const mapRouteTabTag = Object.fromEntries(
          listRouteTabTag.map((item: any) => [item.id, item])
        );

        setSourceRouteTabTag({ list: listRouteTabTag, map: mapRouteTabTag });
        changeVersionRouteTabTag();
      }

      next();
    }
  });
};

export const createRouteGuard = (router: Router) => {
  NProgress.start();
  setupPageGuard(router);

  NProgress.done();
};
