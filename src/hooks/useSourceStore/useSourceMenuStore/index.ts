import { defineStore } from 'pinia';
import SourceRaw from '@/sources/menus';

export const useSourceMenuStore = defineStore('SourceMenu', () => {
  const sourceState = reactive<any>({
    version: '',
    list: [],
    map: {},
  });

  const version = computed(() => sourceState.version);
  const list = computed(() => sourceState.list);
  const map = computed(() => sourceState.map);

  const initSourceImportRaw = async () => {
    sourceState.list = Object.values(SourceRaw).reduce((previousValue: any[], currentValue: any) => {
      previousValue.push(...Object.values(currentValue));
      return previousValue;
    }, []);
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));
  };

  const refreshSource = async payload => {
    const { data } = (await fetch('Demo/Menu.Select', payload)) as any;

    sourceState.list = data.list;
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));
  };

  const setSource = ({ list, map }) => {
    sourceState.list = list;
    sourceState.map = map;
  };

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
