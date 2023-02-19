export const useSourceRouteTabTagSetup = () => {
  const sourceState: any = {
    version: '',
    list: [],
    map: {},
  };

  const refreshSourceImportRaw = async () => {
    sourceState.list = useLocalStorage('SourceRouteTabTag', []);
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));

    sourceState.version = String(new Date().getTime());
  };

  const refreshSource = async () => {
    sourceState.list = useLocalStorage('SourceRouteTabTag', []);
    sourceState.map = Object.fromEntries(sourceState.list.map(item => [item.id, item]));

    sourceState.version = String(new Date().getTime());
  };

  const pushRouteTabTag = payload => {
    sourceState.list.push(payload);
    useLocalStorage('SourceRouteTabTag', sourceState.list);
  };

  return {
    sourceState,

    refreshSourceImportRaw,
    refreshSource,
    pushRouteTabTag,
  };
};
