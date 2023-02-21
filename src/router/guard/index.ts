import type { Router } from 'vue-router';
import { setRouteEmitter } from '../utils/route-listener';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {
  useSourceMenuStore,
  useSourceRouteStoreTool,
} from '@/hooks/useSourceStore';

NProgress.configure({ showSpinner: false });

const setupPageGuard = (router: Router) => {
  router.beforeEach(async to => {
    setRouteEmitter(to);
  });
};

// const setupRouteTabTagGuard = (router: Router) => {
//   router.beforeEach(async to => {
//     const { map: menuMap } = useSourceMenuStore();
//     const { setSource, list, changeVersion } = useSourceRouteTabTagStore();
//     const { id, code, scope }: any = to.meta;
//     if (menuMap[id]) {
//       list.push({ id, code, scope });
//     } else if (!list.find(item => item.id === to.meta.id)) {
//       list.push({ ...menuMap[id] });
//     }
//     const map = Object.fromEntries(list.map(item => [item.id, item]));
//     setSource({ list, map });
//     useStorage('SourceRouteTabTagLocal', list);
//     changeVersion();
//   });
// };

const setupMenuGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const { getSource, initSourceImportRaw } = useSourceMenuStore();
    const { list } = getSource();

    if (list.length === 0) {
      const { list } = await initSourceImportRaw();
      const { menuToRoute } = useSourceRouteStoreTool();
      list.forEach((item: any) => {
        router.addRoute(item.scope, menuToRoute({ menu: item }));
      });
      next({ ...to, replace: true });
      return;
    } else {
      next();
    }
  });
};

export const createRouteGuard = (router: Router) => {
  NProgress.start();
  setupPageGuard(router);
  // setupRouteTabTagGuard(router);
  setupMenuGuard(router);

  NProgress.done();
};
