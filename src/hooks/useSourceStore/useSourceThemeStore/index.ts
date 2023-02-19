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

  const refreshSourceImportRaw = async () => {
    sourceState.list = Object.values(SourceRaw).reduce((previousValue: any[], currentValue: any) => {
      previousValue.push(...Object.values(currentValue));
      return previousValue;
    }, []);
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));

    sourceState.version = String(new Date().getTime());
  };

  const refreshSource = async payload => {
    const { data } = (await fetch('Demo/Menu.Select', payload)) as any;

    sourceState.list = data.list;
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));

    sourceState.version = String(new Date().getTime());
  };

  return {
    version,
    list,
    map,

    refreshSourceImportRaw,
    refreshSource,
  };
});
