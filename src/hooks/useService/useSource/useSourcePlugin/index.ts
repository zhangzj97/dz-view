import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';

const { request } = useRequest();

const fileMap = import.meta.glob(['@/views/*/sources/plugins/index.ts'], {
  eager: true,
});

const SourceRaw = Object.entries(fileMap).reduce(
  (prev, [, item]: any) => Object.assign(prev, item.default),
  {}
);

export const useSourcePlugin = defineStore(
  'SourcePlugin', //
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
