import { defineStore } from 'pinia';
import SourceRaw from '@/sources/plugins';

export const useSourcePluginStore = defineStore(
  'SourcePlugin', //
  () => {
    const sourceState: any = {
      version: '',
      list: [],
      map: {},
    };

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
        sourceState.list.map((item: any) => [item.id, item.default])
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
    const setSource = async ({ list, map }) => {
      sourceState.list = list;
      sourceState.map = map;

      return { list: sourceState.list, map: sourceState.map };
    };

    // 强制改变资源
    const setSourceList = async ({ list }) => {
      sourceState.list = list;
      sourceState.map = Object.fromEntries(
        sourceState.list.map((item: any) => [item.id, item])
      );

      return { list: sourceState.list, map: sourceState.map };
    };

    // 强制改变资源
    const setSourceMap = async ({ map }) => {
      sourceState.map = map;
      sourceState.list = Object.values(map);

      return { list: sourceState.list, map: sourceState.map };
    };

    // 获取当前的资源
    const getSource = async () => {
      return { list: sourceState.list, map: sourceState.map };
    };

    // 触发刷新资源 通知其他组件变更
    const changeVersion = () => {
      sourceState.version = String(new Date().getTime());
    };

    const findPlugin = ({ code }) => {
      return () => sourceState.map[code];
    };

    return {
      version,

      initSourceImportRaw,
      refreshSource,
      setSource,
      setSourceList,
      setSourceMap,
      getSource,

      changeVersion,

      findPlugin,
    };
  }
);
