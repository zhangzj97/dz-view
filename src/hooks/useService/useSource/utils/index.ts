import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';

export const toAccessMenu = ({ access }) =>
  Object.fromEntries(
    Object.entries(access).filter(([, item]: any) =>
      ['node', 'route'].includes(item.type)
    )
  );
export const toAccessPermission = ({ access }) =>
  Object.fromEntries(
    Object.entries(access).filter(([, item]: any) =>
      ['client', 'route', 'action'].includes(item.type)
    )
  );
export const toAccessRoute = ({ access }) => {
  return Object.fromEntries(
    Object.entries(access)
      .filter(([, item]: any) => {
        return ['route'].includes(item.type) && item.route;
      })
      .map(([, item]: any) => {
        const [c1, c2] = item.component.split('/');
        return [
          item.code,
          {
            path: item.route,
            name: item.code,
            component: () =>
              import(
                `../../../../views/${item.scope}/pages/${c1}/${c2}/index.vue`
              ),
            meta: {
              access: item,
            },
          },
        ];
      })
  );
};

export const toAccessRouteTag = ({ access }) =>
  Object.fromEntries(
    Object.entries(access).filter(([, item]: any) => item.tagFixed)
  );

export const toSourceRaw = ({ fileMap }) =>
  Object.entries(fileMap).reduce(
    (prev, [, item]: any) => Object.assign(prev, item.default),
    {}
  );

export const toApiService = ({ api }) => {
  const { request } = useRequest();

  const data = Object.entries(api).reduce(
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
          const requestMethod = method || 'POST';
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

export const getStorage = (code, { defaultValue }) => {
  if (!localStorage.key(code)) {
    localStorage.setItem(code, JSON.stringify(defaultValue));
  }

  try {
    return JSON.parse(localStorage.getItem(code) || '{}');
  } catch (e) {
    return {};
  }
};

export const setStorage = (code, value) => {
  localStorage.setItem(code, JSON.stringify(value));
};
