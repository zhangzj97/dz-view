import { defineStore } from 'pinia';
import { useRequest } from '@/hooks/useRequest';
import { toSourceRaw, toAccessRouteTag } from '../utils';

// TODO 来自于Config
const LocalStorageKey = 'SourceAccessRouteTagDefault';
const StoreKey = 'SourceAccessRouteTag';
const SourceFind = '/SourceAccessRouteTag/Find';

// 自动获取 SourceRaw
const fileMap = import.meta.glob(['@/views/*/sources/access/index.ts'], {
  eager: true,
});
const SourceRaw = toAccessRouteTag({ access: toSourceRaw({ fileMap }) });

// request
const { request } = useRequest();

// useSource
export const useSourceAccessRouteTag = defineStore(
  StoreKey, //
  () => {
    const sourceState: any = {
      version: { code: '1', value: String(Math.random()) },
      // 如果不刻意使用, 主要使用 default
      map: {
        ...SourceRaw,
        default: useLocalStorage(LocalStorageKey, {}),
      },
    };

    // version 变动通知
    const version = computed(() => sourceState.version);
    const refresh = async ({ code }: { code: '0' }) => {
      Object.assign(sourceState.version, {
        code,
        value: String(Math.random()),
      });
    };

    // 以 sourceState.map 作为 Map, 刻意查看其他模块的 Source
    const FindModule = async ({ moduleName }) => ({
      code: 0,
      data: sourceState.map[moduleName],
    });

    // 查看所有 Source
    const SelectModule = async () => ({ code: 0, data: sourceState.map });

    // TODO
    // 以 sourceState.map.default 作为 Map, 查看某值
    // const GetValue = async ({ code }) => ({
    //   code: 0,
    //   data: sourceState.map.default[code],
    // });

    // 查看
    // remote = true   远程调用
    // remote = false  查看 sourceState.map.default
    const Find = async payload => {
      const { remote } = payload;
      if (!remote) {
        return { code: 0, data: sourceState.map.default };
      } else {
        const { data } = await request({
          url: SourceFind,
          method: 'POST',
          payload,
        });
        return { code: 0, data: data.data };
      }
    };

    // 更新
    // cache 是否存入 localStorage 以供下次刷新使用
    const Update = async payload => {
      const { value, cache } = payload;
      sourceState.map.default = value;
      cache && useLocalStorage(LocalStorageKey, sourceState.map.default);
      return { code: 0, data: {} };
    };

    // 返回
    return {
      version,
      refresh,

      // source module
      FindModule,
      SelectModule,

      // source default module
      // GetValue,
      Find,
      Update,
    };
  }
);
