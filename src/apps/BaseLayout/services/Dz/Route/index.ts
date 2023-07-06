import { defineStore } from 'pinia';
import menuList from '@/resources/menus/data.json';
import { useCollection } from '@/hooks/useCollection';

const { formatTree } = useCollection();

export const useStore = defineStore('Dz/Route', () => {
  const menuState = reactive<any>({
    list: [],
    tree: [],
    map: {},

    levelTopModa: false,
    levelTopMenuId: '0',

    iconMode: false,

    collapse: {},
    active: {},
    show: {},
  });

  const routeTagState = reactive<any>({
    list: [],
    tree: [],
    map: {},

    collapse: {},
    active: {},

    fixed: [],
    open: [],
  });

  const Test = payload => {
    return new Promise(resolve => {
      resolve({ data: payload });
    });
  };

  const RefreshMenu = payload => {
    return new Promise(resolve => {
      const { list, map, tree } = formatTree({ list: menuList });
      menuState.list = list;
      menuState.tree = tree;
      menuState.map = map;

      routeTagState.fixed = list
        .filter(item => item.fixedTag)
        .map(item => item.id);

      resolve({ data: { menu: list } });
    });
  };

  const AddRouteTag = payload => {
    const { id } = payload;
    return new Promise(resolve => {
      if (id && routeTagState.fixed.includes(id)) {
        console.log('[1] fixed 存在');
        resolve({ data: {} });
        return;
      }

      if (id && routeTagState.open.includes(id)) {
        console.log('[1] open 存在');
        resolve({ data: {} });
        return;
      }

      if (id && !routeTagState.open.includes(id)) {
        console.log('[1] open 不存在');
        routeTagState.open.push(id);
        resolve({ data: {} });
        return;
      }
    });
  };

  const RemoveRouteTag = payload => {
    const { id } = payload;
    return new Promise(resolve => {
      routeTagState.open = routeTagState.open.filter((item: any) => item != id);

      resolve({ data: {} });
    });
  };

  const RemoveAllRouteTag = payload => {
    return new Promise(resolve => {
      routeTagState.open = [];

      resolve({ data: {} });
    });
  };

  const GetState = () => ({ menuState, routeTagState });

  return {
    routeTagState,
    menuState,

    Test,
    RefreshMenu,

    AddRouteTag,
    RemoveRouteTag,
    RemoveAllRouteTag,

    GetState,
  };
});
