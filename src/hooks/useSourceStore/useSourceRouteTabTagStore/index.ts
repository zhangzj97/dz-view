import { defineStore } from 'pinia';
const SourceRaw = {};

export const useSourceRouteTabTagStore = defineStore('SourceRouteTabTag', () => {
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

  const pushRouteTabTag = payload => {
    sourceState.list.push(payload);
    useLocalStorage('SourceRouteTabTag', sourceState.list);
  };

  return {
    version,
    list,
    map,

    refreshSourceImportRaw,
    refreshSource,
    pushRouteTabTag,
  };
});
