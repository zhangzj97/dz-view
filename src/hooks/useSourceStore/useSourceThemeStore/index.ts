import { defineStore } from 'pinia';
import SourceRaw from '@/themes';

export const useSourceThemeStore = defineStore('SourceTheme', () => {
  const sourceState = reactive<any>({
    version: '',
    list: [],
    map: {},
  });

  const version = computed(() => sourceState.version);
  const list = computed(() => sourceState.list);
  const map = computed(() => sourceState.map);

  // 初始化
  // 只会触发一次
  // 通常在 入口组件触发
  const initSourceImportRaw = async () => {
    sourceState.list = Object.values(SourceRaw).reduce((previousValue: any[], currentValue: any) => {
      previousValue.push(...Object.values(currentValue));
      return previousValue;
    }, []);
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));
  };

  // 刷新资源
  // 具体使用资源的地方触发
  // 通常 由 version 响应
  const refreshSource = async payload => {
    const { data } = (await fetch('Demo/Menu.Select', payload)) as any;

    sourceState.list = data.list;
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));
  };

  // 强制改变资源
  const setSource = ({ list, map }) => {
    sourceState.list = list;
    sourceState.map = map;
  };

  // 触发刷新资源
  const changeVersion = () => {
    sourceState.version = String(new Date().getTime());
  };

  return {
    version,
    list,
    map,

    initSourceImportRaw,
    refreshSource,
    setSource,

    changeVersion,
  };
});
