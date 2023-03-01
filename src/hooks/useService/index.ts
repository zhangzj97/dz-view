import { useSourceServiceStore } from '@/hooks/useSourceStore';

export const useService = () => {
  const { getSource } = useSourceServiceStore();

  const dispatch = async (code, payload) => {
    const { map } = await getSource();
    const [moduleName, apiName] = code.split('.');

    const { data } = await map[moduleName]()[apiName](payload);

    return { data: data.data };
  };

  return {
    dispatch,
  };
};
