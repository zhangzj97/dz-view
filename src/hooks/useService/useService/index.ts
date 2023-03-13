import {
  useSourceAccess,
  useSourceAccessMenu,
  useSourceAccessPermission,
  useSourceAccessRoute,
  useSourceAccessRouteTag,
  useSourceApi,
  useSourceApiService,
  useSourceAuth,
  useSourceEnum,
  useSourcePlugin,
  useSourceRoute,
  useSourceTheme,
} from '../useSource';

// useService
export const useService = () => {
  const serviceState = reactive({
    SourceAccess: useSourceAccess,
    SourceAccessMenu: useSourceAccessMenu,
    SourceAccessPermission: useSourceAccessPermission,
    SourceAccessRoute: useSourceAccessRoute,
    SourceAccessRouteTag: useSourceAccessRouteTag,
    SourceApi: useSourceApi,
    SourceApiService: useSourceApiService,
    SourceAuth: useSourceAuth,
    SourceEnum: useSourceEnum,
    SourcePlugin: useSourcePlugin,
    SourceRoute: useSourceRoute,
    SourceTheme: useSourceTheme,

    // 把 api service 解构出来
    // 会把 default 也解构出来
    ...useSourceApiService().SelectModuleStatic().data,
  });

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

  // 测试专用
  const checkAll = async () => {
    console.log({
      ...serviceState,
      SourceAccess: (await useSourceAccess().SelectModule()).data,
      SourceAccessMenu: (await useSourceAccessMenu().SelectModule()).data,
      SourceAccessPermission: (await useSourceAccessPermission().SelectModule())
        .data,
      SourceAccessRoute: (await useSourceAccessRoute().SelectModule()).data,
      SourceAccessRouteTag: (await useSourceAccessRouteTag().SelectModule())
        .data,
      SourceApi: (await useSourceApi().SelectModule()).data,
      SourceApiService: (await useSourceApiService().SelectModule()).data,
      SourceAuth: (await useSourceAuth().SelectModule()).data,
      SourceEnum: (await useSourceEnum().SelectModule()).data,
      SourcePlugin: (await useSourcePlugin().SelectModule()).data,
      SourceRoute: (await useSourceRoute().SelectModule()).data,
      SourceTheme: (await useSourceTheme().SelectModule()).data,
    });
  };

  // return
  return {
    dispatch,

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
