import { defineStore } from 'pinia';
import { menuList } from './data';

const { formatTree } = useCollection();
const { debug } = useLog({ module: 'Dz/Route', color: 'blue' });

export const useStore = defineStore('Dz/Route', () => {
  const menuState = reactive<any>({
    list: [],
    tree: [],
    map: {},

    levelTopModa: false, // [顶级菜单模式] Switch
    levelTopMenuId: '0', // [顶级菜单模式] 选择的 Id
    iconMode: false, // [图标模式] Switch
    collapse: {}, // [收缩] State
    active: {}, // [高亮] State
  });

  const routeTagState = reactive<any>({
    list: [],
    tree: [],
    map: {},

    active: {}, // [高亮] State
    fixed: [], // [展示列表] 固定
    open: [], // [展示列表] 非固定
  });

  const Test = payload => {
    return new Promise(resolve => {
      resolve({ data: payload });
    });
  };

  const RefreshMenu = payload => {
    return new Promise(resolve => {
      debug('获取数据并 formatTree', 'RefreshMenu');
      debug('menuState 更新 format 后的数据', 'RefreshMenu');
      const { list, map, tree } = formatTree({ list: menuList });
      menuState.list = list;
      menuState.tree = tree;
      menuState.map = map;

      debug('routeTagState 更新 展示列表固定 fixed 的数据', 'RefreshMenu');
      routeTagState.fixed = list
        .filter(item => item.fixedTag)
        .map(item => item.id);

      resolve({ data: { menu: list } });
    });
  };

  const AddRouteTag = payload => {
    const { id } = payload;
    return new Promise(resolve => {
      if (!id) {
        debug('失败: id 错误', 'AddRouteTag', { payload });
      } else if (id && routeTagState.fixed.includes(id)) {
        debug('失败: routeTagState.fixed 存在', 'AddRouteTag', { payload });
      } else if (id && routeTagState.open.includes(id)) {
        debug('失败: routeTagState.open 存在', 'AddRouteTag', { payload });
      } else if (id && !routeTagState.open.includes(id)) {
        debug('成功: routeTagState.open', 'AddRouteTag');
        routeTagState.open.push(id);
      }
      resolve({ data: {} });
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
