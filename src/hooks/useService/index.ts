import { useStore as useStoreDzRoute } from '@/apps/BaseLayout/services/Dz/Route/index';

// useService
export const useService = () => {
  const serviceState = reactive({
    'Dz/Route': useStoreDzRoute,
  });

  // dispatch
  const dispatch = async (code, payload) => {
    const [moduleName, apiName] = code.split('.');
    try {
      const { data } = await serviceState[moduleName]()[apiName](payload);
      return { data };
    } catch (e) {
      console.error('dispatch 发生错误 :', code);
      return { data: {} };
    }
  };

  // getState
  const getState = (code, payload) => {
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

  // return
  return {
    dispatch,
    getState,

    // 测试
    checkAll,
  };
};
