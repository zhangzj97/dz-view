import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';

const { request } = useRequest();

const fileMap = import.meta.glob(['@/views/*/sources/apis/index.ts'], {
  eager: true,
});

const SourceRaw = Object.entries(fileMap).reduce(
  (prev, [, item]: any) => Object.assign(prev, item.default),
  {}
);

const apiToService = ({ SourceRaw }) => {
  const data = Object.entries(SourceRaw).reduce(
    (prev, [, item]) => Object.assign(prev, item),
    {}
  );

  return Object.entries(data).reduce((prev, [key, item]: any) => {
    prev[key] = defineStore(key, () => {
      const moduleState = reactive({
        version: {
          data: { code: '0', value: String(Math.random()) },
          queryModel: { code: '0', value: String(Math.random()) },
          searchModel: { code: '0', value: String(Math.random()) },
        },

        queryModel: {},
        searchModel: {},
      });

      const version = computed(() => moduleState.version.data);
      const queryModelVersion = computed(() => moduleState.version.queryModel);
      const searchModelVersion = computed(
        () => moduleState.version.searchModel
      );

      const actionApi = Object.entries(item).reduce((prev2, [key2, item2]) => {
        prev2[key2] = async payload => {
          const { url, method } = item2 as any;
          const requestUrl = url;
          const requestMethod = method || `POST`;
          return request({
            method: requestMethod,
            url: requestUrl,
            payload,
          });
        };
        return prev2;
      }, {});

      return {
        version,
        queryModelVersion,
        searchModelVersion,

        ...actionApi,
      };
    });

    return prev;
  }, {});
};

const SourceRawApiService = apiToService({ SourceRaw });

export const useSourceApi = defineStore(
  'SourceApi', //
  () => {
    const sourceState: any = {
      version: { code: '1', value: String(Math.random()) },
      map: { ...SourceRaw },
    };

    const version = computed(() => sourceState.version);

    const refresh = async ({ code }: { code: '0' }) => {
      Object.assign(sourceState.version, {
        code,
        value: String(Math.random()),
      });
    };

    const Find = async (payload, { cache }) => {
      if (cache) {
        const { code } = payload;
        return { code: 0, data: { content: sourceState.map[code] } };
      } else {
        const { data } = await request({
          url: '/xxx/xxx',
          method: 'POST',
          payload,
        });
        return data;
      }
    };

    const Select = async () => {
      return { code: 0, data: sourceState.map };
    };

    const Update = async payload => {
      const { code, value } = payload;
      sourceState.map[code] = value;
      return { code: 0, data: {} };
    };

    return {
      version,
      refresh,

      Find,
      Select,
      Update,
    };
  }
);

export const useSourceApiService = defineStore(
  'SourceApiService', //
  () => {
    const sourceState: any = {
      version: { code: '1', value: String(Math.random()) },
      map: { ...SourceRawApiService },
    };

    const version = computed(() => sourceState.version);

    const refresh = async ({ code }: { code: '0' }) => {
      Object.assign(sourceState.version, {
        code,
        value: String(Math.random()),
      });
    };

    const getApiServiceStatic = () => {
      return { code: 0, data: sourceState.map };
    };

    const Find = async (payload, { cache }) => {
      if (cache) {
        const { code } = payload;
        return { code: 0, data: { content: sourceState.map[code] } };
      } else {
        const { data } = await request({
          url: '/xxx/xxx',
          method: 'POST',
          payload,
        });
        return data;
      }
    };

    const Select = async () => {
      return { code: 0, data: sourceState.map };
    };

    const Update = async payload => {
      const { code, value } = payload;
      sourceState.map[code] = value;
      return { code: 0, data: {} };
    };

    return {
      version,
      refresh,

      getApiServiceStatic,

      Find,
      Select,
      Update,
    };
  }
);
