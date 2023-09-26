import { useStore as useStoreDzRoute } from '@/apps/BaseLayout/services/Dz/Route/index';
import { useStore as useStoreAuthBar } from '@/apps/AdminApp/services/Auth/Bar/index';
import type { Dispatch as DispatchAuth } from '@/apps/AdminApp/services/Auth/types/dispatch';
import type { Dispatch as DispatchDz } from '@/apps/BaseLayout/services/Dz/types/dispatch';
import type { Dispatch as DispatchUser } from '@/apps/AdminApp/services/User/types/dispatch';
import { Service as ServiceAuth } from '@/apps/AdminApp/services/Auth/types/service';
import { Service as ServiceDz } from '@/apps/BaseLayout/services/Dz/types/service';
import { Service as ServiceUser } from '@/apps/AdminApp/services/User/types/service';

import { Service, store, type Dispatch } from '@/services/data';

const { post } = useRequest();

// type Dispatch = DispatchDz & DispatchAuth & DispatchUser;

// const service = {
//   ...ServiceAuth,
//   ...ServiceDz,
//   ...ServiceUser,
// };

// useService
export const useService = () => {
  const serviceState = reactive({
    'Dz/Route': useStoreDzRoute,
    'Auth/Bar': useStoreAuthBar,
  });

  // dispatch
  const dispatch: Dispatch = (service: any) => async (payload: any) => {
    const { code, url } = service;
    const [moduleName, apiName] = code.split('.');
    try {
      if (serviceState[moduleName]?.()[apiName]) {
        // 存在拦截
        const { data, code, msg } = await serviceState[moduleName]()[apiName](payload);
        return { data, code, msg };
      } else {
        const res = await post<any, any>(url, payload);
        const { data, code, msg } = res.data;
        return { data, code, msg };
      }
    } catch (e) {
      console.error('dispatch 发生错误 :', code);
      return { data: null, msg: '', code: '0' };
    }
  };

  // getState
  const getState = (code, payload = null) => {
    const [moduleName, apiName] = [code, 'GetState'];
    try {
      const data = serviceState[moduleName]()[apiName](payload);
      return data;
    } catch (e) {
      console.error('getState 发生错误 :', code);
      return { data: {} };
    }
  };

  // 测试专用
  const checkAll = async () => {
    console.log({
      ...serviceState,
    });
  };

  const payload = <T>(index: any, data: T, option: any = {}) => {
    const result: any = {
      index: {},
      data: null,
      list: [],
      page: null,
    };
    if (typeof index === 'string' || typeof index === 'number') {
      result.index.list = [index];
    } else if (Array.isArray(index)) {
      result.index.list = [...index];
    }

    if (option?.page !== null) {
      result.page = option.page;
    }

    result.data = data;

    return result;
  };

  // return
  return {
    dispatch,
    getState,

    // 测试
    checkAll,

    // 枚举
    Service,

    payload,
  };
};
