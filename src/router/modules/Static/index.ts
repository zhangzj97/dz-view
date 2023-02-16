import type { RouteRecordRaw } from 'vue-router';

export const RootRoute: RouteRecordRaw = {
  path: '/',
  redirect: '/@Three',
  meta: {
    code: 'Route.Root',
  },
};
