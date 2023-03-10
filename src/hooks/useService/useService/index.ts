import {
  useSourceAccess,
  useSourceApi,
  useSourceApiService,
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

  return {
    dispatch,
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
