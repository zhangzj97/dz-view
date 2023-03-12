import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';

const { request } = useRequest();

const fileMap = import.meta.glob(['@/views/*/sources/access/index.ts'], {
  eager: true,
});

const SourceRaw = Object.entries(fileMap).reduce(
  (prev, [, item]: any) => Object.assign(prev, item.default),
  {}
);

const LocalStorageKey = 'SourceAccessDefault';

export const useSourceAccess = defineStore(
  'SourceAccess', //
  () => {
    const sourceState: any = {
      version: { code: '1', value: String(Math.random()) },
      map: {
        ...SourceRaw,
        default: useLocalStorage(LocalStorageKey, {}),
      },
    };

    const version = computed(() => sourceState.version);

    const refresh = async ({ code }: { code: '0' }) => {
      Object.assign(sourceState.version, {
        code,
        value: String(Math.random()),
      });
    };

    const FindModule = async ({ moduleName }) => ({
      code: 0,
      data: sourceState.map[moduleName],
    });

    const SelectModule = async () => ({ code: 0, data: sourceState.map });

    const GetValue = async ({ code }) => ({
      code: 0,
      data: sourceState.map.default[code],
    });

    const Find = async payload => {
      const { remote } = payload;

      if (!remote) {
        return { code: 0, data: sourceState.map.default };
      } else {
        const { data } = await request({
          url: '/SourceAccess/Find',
          method: 'POST',
          payload,
        });
        return { code: 0, data: data.data };
      }
    };

    const Update = async payload => {
      const { value, cache } = payload;

      sourceState.map.default = value;
      cache && useLocalStorage(LocalStorageKey, sourceState.map.default);

      return { code: 0, data: {} };
    };

    return {
      version,
      refresh,

      FindModule,
      SelectModule,

      GetValue,
      Find,

      Update,
    };
  }
);
