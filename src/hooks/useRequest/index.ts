import axios from 'axios';

axios.defaults.baseURL = '/api';

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (config?.headers) {
      config.headers['Authorization'] = '123';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export const useRequest = () => {
  const request = async ({ method, url, payload }) => {
    return axios({ method, url, data: payload });
  };

  return {
    request,
  };
};
