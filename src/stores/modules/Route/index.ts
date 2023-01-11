import { defineStore } from 'pinia';

export const useRouteStore = defineStore({
  id: 'Core.Router',
  state: () => ({
    projectRaw: { collection: [], tree: [], version: '' },
    projectCache: { collection: [], tree: [], map: {} },
    projectMap: {},
    projectList: [],

    navApp: { map: {}, list: [], state: { active: {} } },

    accessRaw: { list: [], tree: [], version: '' },
    accessCache: { list: [], tree: [], map: {} },
    accessMap: {},
    accessList: [],

    // StoreProps
    menu: { map: {}, list: [], state: { active: {} } },
    pageTab: { map: {}, list: [], state: { active: {} } },
    tabbar: { map: {}, list: [], state: { active: {} } },

    // 框架放弃组件缓存, 使用数据缓存
    pageKeepLiveCache: {},
  }),
  getters: {
    getProjectRawVersion: state => state.projectRaw.version,
    getProjectMap: state => state.projectMap,
    getProjectList: state => state.projectList,

    getNavAppMap: state => state.navApp.map,
    getNavAppList: state => state.navApp.list,
    getNavAppActive: state => state.navApp.state.active,

    getAccessRawVersion: state => state.accessRaw.version,
    getAccessMap: state => state.accessMap,
    getAccessList: state => state.accessList,

    getMenuMap: state => state.menu.map,
    getMenuList: state => state.menu.list,
    getMenuActive: state => state.menu.state.active,

    getPageTabMap: state => state.pageTab.map,
    getPageTabList: state => state.pageTab.list,
    getPageTabActive: state => state.pageTab.state.active,

    getTabbarMap: state => state.tabbar.map,
    getTabbarList: state => state.tabbar.list,
    getTabbarActive: state => state.tabbar.state.active,
  },
  actions: {
    async 'route/project/refresh'(payload) {
      const { data } = await axios['rbac/project/select'](payload);
      this.projectRaw.collection = data.items;
      this.projectRaw.tree = treeUtil.toTree(this.projectRaw.collection);
      this.projectCache.collection = this.projectRaw.collection;
      this.projectCache.tree = this.projectRaw.tree;
    },

    async 'route/select'(payload) {
      const { data } = await axios['rbac/access/select'](payload);
      this.accessRaw.collection = data.items;
      this.accessRaw.tree = treeUtil.toTree(this.accessRaw.collection);
      this.accessCache.collection = this.accessRaw.collection;
      this.accessCache.tree = this.accessRaw.tree;
    },
  },
});
