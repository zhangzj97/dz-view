export const useSource = async ({ request, strategy, sourceName }: any) => {
  const sourceMap = {
    route: {
      importSource: true,
      importPath: 'routes',
      localStorageListKey: 'SourceRouteList',
      localStorageMapKey: 'SourceRouteMap',
    },
    theme: {
      importSource: false,
      importPath: 'themes',
      localStorageListKey: 'SourceThemeList',
      localStorageMapKey: 'SourceThemeMap',
    },
    menu: {
      importSource: true,
      importPath: 'menus',
      localStorageListKey: 'SourceMenuList',
      localStorageMapKey: 'SourceMenuMap',
    },
  };

  const { importPath, importSource, localStorageListKey, localStorageMapKey } = sourceMap[sourceName];

  const getSourceImport = async () => {
    const SourceRaw = importSource ? (await import(`../../sources/${importPath}/index.ts`)).default : (await import(`../../${importPath}/index.ts`)).default;

    const SourceList = rawToList({ raw: SourceRaw });
    const SourceMap = listToMap({ list: SourceList });

    return { SourceList, SourceMap };
  };

  const getSourceRemote = async () => {
    const { data } = await request();

    const SourceList = data.list;
    const SourceMap = listToMap({ list: SourceList });

    return { SourceList, SourceMap };
  };

  const getSourceLocal = async () => {
    const { SourceList, SourceMap } = selectLocalStore();

    return { SourceList, SourceMap };
  };

  const getSourceEmpty = async () => {
    const { SourceList, SourceMap } = { SourceList: [], SourceMap: {} };

    return { SourceList, SourceMap };
  };

  const selectLocalStore = () => {
    try {
      const SourceList = JSON.parse(localStorage.getItem(localStorageListKey) || '{}');
      const SourceMap = JSON.parse(localStorage.getItem(localStorageMapKey) || '{}');
      return {
        SourceList,
        SourceMap,
      };
    } catch (e) {
      console.log(e);

      return {
        SourceList: [],
        SourceMap: {},
      };
    }
  };
  const updateLocalStore = ({ SourceList, SourceMap }) => {
    localStorage.setItem(localStorageListKey, JSON.stringify(SourceList));
    localStorage.setItem(localStorageMapKey, JSON.stringify(SourceMap));
  };
  const deleteLocalStore = () => {
    localStorage.removeItem(localStorageListKey);
    localStorage.removeItem(localStorageMapKey);
  };

  const rawToList = ({ raw }) => {
    const result = Object.values(raw).reduce((previousValue: any[], currentValue: any) => {
      previousValue.push(...Object.values(currentValue));
      return previousValue;
    }, []);

    return result;
  };

  const listToMap = ({ list }) => {
    const result = {};

    list.forEach(item => {
      const { scope, code } = item;
      const key = `@${scope}/${code}`;
      const value = item;

      result[key] = value;
    });
    return result;
  };

  const getSourceStrategyImport = async () => {
    const { SourceList: list01, SourceMap: map01 } = await getSourceImport();
    const { SourceList: list02, SourceMap: map02 } = await getSourceEmpty();

    const SourceList = [...list01, ...list02];
    const SourceMap = { ...map01, ...map02 };
    updateLocalStore({ SourceList, SourceMap });

    return { SourceList, SourceMap };
  };
  const getSourceStrategyLocal = async () => {
    const { SourceList: list01, SourceMap: map01 } = await getSourceLocal();
    const { SourceList: list02, SourceMap: map02 } = await getSourceEmpty();

    const SourceList = [...list01, ...list02];
    const SourceMap = { ...map01, ...map02 };
    updateLocalStore({ SourceList, SourceMap });

    return { SourceList, SourceMap };
  };
  const getSourceStrategyRemote = async () => {
    const { SourceList: list01, SourceMap: map01 } = await getSourceRemote();
    const { SourceList: list02, SourceMap: map02 } = await getSourceEmpty();

    const SourceList = [...list01, ...list02];
    const SourceMap = { ...map01, ...map02 };
    updateLocalStore({ SourceList, SourceMap });

    return { SourceList, SourceMap };
  };
  const getSourceStrategyImportAndRemote = async () => {
    const { SourceList: list01, SourceMap: map01 } = await getSourceImport();
    const { SourceList: list02, SourceMap: map02 } = await getSourceRemote();

    const SourceList = [...list01, ...list02];
    const SourceMap = { ...map01, ...map02 };
    updateLocalStore({ SourceList, SourceMap });

    return { SourceList, SourceMap };
  };
  const getSourceStrategyLocalAndRemote = async () => {
    const { SourceList: list01, SourceMap: map01 } = await getSourceLocal();
    const { SourceList: list02, SourceMap: map02 } = await getSourceRemote();

    const SourceList = [...list01, ...list02];
    const SourceMap = { ...map01, ...map02 };
    updateLocalStore({ SourceList, SourceMap });

    return { SourceList, SourceMap };
  };

  const dispatch = ({ strategy }) => {
    const StrategyMap = {
      import: () => getSourceStrategyImport(),
      local: () => getSourceStrategyLocal(),
      remote: () => getSourceStrategyRemote(),
      importAndRemote: () => getSourceStrategyImportAndRemote(),
      localAndRemote: () => getSourceStrategyLocalAndRemote(),
    };

    return StrategyMap[strategy]();
  };

  const { SourceList, SourceMap } = await dispatch({ strategy });

  return {
    SourceList,
    SourceMap,

    deleteLocalStore,
  };
};
