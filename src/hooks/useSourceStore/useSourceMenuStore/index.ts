import { defineStore } from 'pinia';
import SourceRaw from '@/sources/menus';

export const useSourceMenuStore = defineStore(
  'SourceMenu', //
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
  }
);

export const useSourceMenuStateStore = defineStore('SourceMenuState', () => {
  const sourceState = reactive<any>({
    version: String(new Date().getTime()),
    collapsed: false,
    mode: 'inline',
    theme: 'light',

    openKeys: [],
    selectedKeys: [],
  });

  const version = computed(() => sourceState.version);
  const collapsed = computed(() => sourceState.collapsed);
  const mode = computed(() => sourceState.mode);
  const theme = computed(() => sourceState.theme);
  const openKeys = computed(() => sourceState.openKeys);
  const selectedKeys = computed(() => sourceState.selectedKeys);

  const changeCollapsed = ({ collapsed }) => {
    if (isDefined(collapsed)) {
      sourceState.collapsed = collapsed;
    } else {
      sourceState.collapsed = !sourceState.collapsed;
    }
  };

  const changeMode = ({ mode }) => {
    sourceState.mode = mode;
  };

  const changeTheme = ({ theme }) => {
    sourceState.theme = theme;
  };

  const changeOpenKeys = ({ openKeys }) => {
    sourceState.openKeys = openKeys;
  };

  const changeSelectedKeys = ({ selectedKeys }) => {
    sourceState.selectedKeys = selectedKeys;
  };

  // 触发刷新资源 通知其他组件变更
  const changeVersion = () => {
    sourceState.version = String(new Date().getTime());
  };

  return {
    version,
    mode,
    theme,
    collapsed,
    openKeys,
    selectedKeys,

    changeVersion,
    changeCollapsed,
    changeMode,
    changeTheme,
    changeOpenKeys,
    changeSelectedKeys,
  };
});
