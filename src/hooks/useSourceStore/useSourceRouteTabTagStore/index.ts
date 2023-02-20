import { defineStore } from 'pinia';
const SourceRaw = useStorage('SourceRouteTabTagLocal', []);

export const useSourceRouteTabTagStore = defineStore(
  'SourceRouteTabTag',
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
      sourceState.list = SourceRaw;
      sourceState.map = Object.fromEntries(
        sourceState.list.map((item: any) => [item.id, item])
      );

      useStorage('SourceRouteTabTagLocal', sourceState.list);
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

      useStorage('SourceRouteTabTagLocal', sourceState.list);
      return { list: sourceState.list, map: sourceState.map };
    };

    // 强制改变资源
    const setSource = ({ list, map }) => {
      sourceState.list = list;
      sourceState.map = map;

      useStorage('SourceRouteTabTagLocal', sourceState.list);
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

      changeVersion,
    };
  }
);
