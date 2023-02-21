import SourceRaw from '@/sources/routes';
import type { RouteRecordRaw } from 'vue-router';

export const useSourceRouteStore =
  //
  () => {
    const sourceState = reactive<any>({
      version: '',
      list: [],
      map: {},
    });

    const version = computed(() => sourceState.version);

    // 初始化
    // 只会触发一次
    const initSourceImportRaw = async () => {
      sourceState.list = Object.values(SourceRaw).reduce(
        (previousValue: any[], currentValue: any) => {
          previousValue.push(...Object.values(currentValue));
          return previousValue;
        },
        []
      );
      sourceState.map = Object.fromEntries(
        sourceState.list.map((item: any) => [item.id, item])
      );

      return { list: sourceState.list, map: sourceState.map };
    };

    // 刷新资源
    // 具体使用资源的地方触发
    // 通常 由 version 响应
    const refreshSource = async payload => {
      const { data } = (await fetch('Demo/Menu.Select', payload)) as any;

      sourceState.list = data.list;
      sourceState.map = Object.fromEntries(
        sourceState.list.map(item => [item.id, item])
      );

      return { list: sourceState.list, map: sourceState.map };
    };

    // 强制改变资源
    const setSource = ({ list, map }) => {
      sourceState.list = list;
      sourceState.map = map;

      return { list: sourceState.list, map: sourceState.map };
    };

    // 获取当前的资源
    const getSource = () => {
      return { list: sourceState.list, map: sourceState.map };
    };

    // 触发刷新资源 通知其他组件变更
    const changeVersion = () => {
      sourceState.version = String(new Date().getTime());
    };

    return {
      version,

      initSourceImportRaw,
      refreshSource,
      setSource,
      getSource,

      changeVersion,
    };
  };

export const useSourceRouteStoreTool = () => {
  //
  const menuToRoute = ({ menu }) => {
    const { code, scope, component, redirect, route: routePath } = menu;
    const [component01, component02] = component.split('/');

    const route = {
      name: [`@${scope}`, 'ROUTE', code].join('.'),
      redirect,
      path: routePath,
      component: () =>
        import(
          `../../../views/${scope}/pages/${component01}/${component02}/index.vue`
        ),
      meta: {
        menu,
        label: [`@${scope}`, 'ROUTE', code].join('.'),
      },
    };

    return route;
  };

  return {
    menuToRoute,
  };
};
