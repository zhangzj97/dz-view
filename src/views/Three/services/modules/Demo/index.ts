import api from './apis';
import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';

const { request } = useRequest();

const service = Object.entries(api).reduce((previousValue, currentValue) => {
  const [key, value] = currentValue;
  previousValue[key] = defineStore(key, () => {
    const moduleState = reactive({
      raw: [],
      list: [],

      pageSize: '10',
      page: 1,

      version: '',

      queryModel: {},
      searchModel: {},

      queryModelVersion: '',
      searchModelVersion: '',
    });

    const getSource = () => {
      return { list: moduleState.list };
    };

    const fetchApi = Object.entries(value).reduce(
      (previousValue, currentValue) => {
        const [key, value] = currentValue;
        previousValue[key] = async payload => {
          const { url, method } = value as any;
          const requestUrl = url || `/${key}`;
          const requestMethod = method || `POST`;
          return request({
            method: requestMethod,
            url: requestUrl,
            payload,
          });
        };
        return previousValue;
      },
      {}
    );

    return {
      getSource,

      ...fetchApi,
    };
  });

  return previousValue;
}, {});

export default {
  ...service,
};
