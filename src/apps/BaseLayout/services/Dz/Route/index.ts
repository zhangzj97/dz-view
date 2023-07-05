import { defineStore } from 'pinia';
import routesList from '@/resources/routes/data.json';
import menuList from './menu.json';
import { useCollection } from '@/hooks/useCollection';

const { formatTree } = useCollection();

const { tree, map } = formatTree({ list: menuList });

export const useStore = defineStore('Dz/Route', () => {
  const routeState = reactive({
    list: routesList,
  });

  const menuState = reactive({
    list: menuList,
    tree: tree,
    map: map,

    levelTopModa: false,
    levelTopMenuId: '0',

    iconMode: false,

    collapse: {},
    active: {},
    show: {},
  });

  const routeTagState = reactive({
    list: menuList,
    map: map,

    collapse: {},
    active: {},
    show: {},
  });

  const Test = payload => {
    return new Promise(resolve => {
      resolve({ data: payload });
    });
  };

  const GetState = () => ({ menuState, routeState, routeTagState });

  return {
    routeState,
    routeTagState,
    menuState,

    Test,
    GetState,
  };
});
