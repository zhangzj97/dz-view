import {
  useSourceAccess,
  useSourceApi,
  useSourceApiService,
  useSourceAuth,
  useSourceEnum,
  useSourcePlugin,
  useSourceRoute,
  useSourceTheme,
} from '../useSource';

export const useService = async () => {
  const serviceState = reactive({
    SourceAccess: useSourceAccess,
    SourceApi: useSourceApi,
    SourceApiService: useSourceApiService,
    SourceAuth: useSourceAuth,
    SourceEnum: useSourceEnum,
    SourcePlugin: useSourcePlugin,
    SourceRoute: useSourceRoute,
    SourceTheme: useSourceTheme,

    ...useSourceApiService().getApiServiceStatic().data,
  });

  const dispatch = async (code: DispatchCode, payload, option?: any) => {
    const [moduleName, apiName] = code.split('.');
    const { data } = await serviceState[moduleName]()[apiName](
      payload,
      option || {}
    );

    return { data: data };
  };

  const checkAll = async () => {
    console.log({
      ...serviceState,
      SourceAccess: (await useSourceAccess().Select()).data,
      SourceApi: (await useSourceApi().Select()).data,
      SourceApiService: (await useSourceApiService().Select()).data,
      SourceAuth: (await useSourceAuth().Select()).data,
      SourceEnum: (await useSourceEnum().Select()).data,
      SourcePlugin: (await useSourcePlugin().Select()).data,
      SourceRoute: (await useSourceRoute().Select()).data,
      SourceTheme: (await useSourceTheme().Select()).data,
    });
  };

  return {
    dispatch,

    checkAll,
  };
};

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
