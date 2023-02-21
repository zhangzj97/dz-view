import type { RouteRecordRaw } from 'vue-router';

export const RootRoute: RouteRecordRaw = {
  path: '/',
  redirect: '/@Three',
};

export const OtherRoute: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  component: () => import('../../../views/Three/index.vue'),
};
