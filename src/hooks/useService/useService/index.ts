// useService
export const useService = () => {
  const serviceState = reactive({});

  // dispatch
  const dispatch = async (code, payload) => {
    const [moduleName, apiName] = code.split('.');
    try {
      const { data } = await serviceState[moduleName]()[apiName](payload);
      return { data: data };
    } catch (e) {
      console.error('dispatch 发生错误 :', code);
      return { data: {} };
    }
  };

  // commit
  const commit = (code, payload) => {
    const [moduleName, apiName] = code.split('.');
    try {
      const { data } = serviceState[moduleName]()[apiName](payload);
      return { data: data };
    } catch (e) {
      console.error('dispatch 发生错误 :', code);
      return { data: {} };
    }
  };

  // 测试专用
  const checkAll = async () => {
    console.log({
      ...serviceState,
    });
  };

  // return
  return {
    dispatch,
    commit,

    // 测试
    checkAll,
  };
};

// TODO
export declare type DispatchCode =
  | 'SourceAccess.Select'
  | 'SourceAccess.Find'
  | 'SourceAccess.Update'
  | 'SourceApi.Select'
  | 'SourceApi.Find'
  | 'SourceApi.Update'
  | 'SourceApiService.Select'
  | 'SourceApiService.Find'
  | 'SourceApiService.Update'
  | 'SourceEnum.Select'
  | 'SourceEnum.Find'
  | 'SourceEnum.Update'
  | 'SourcePlugin.Select'
  | 'SourcePlugin.Find'
  | 'SourcePlugin.Update'
  | 'SourceRoute.Select'
  | 'SourceRoute.Find'
  | 'SourceRoute.Update'
  | 'SourceTheme.Select'
  | 'SourceTheme.Find'
  | 'SourceTheme.Update';
