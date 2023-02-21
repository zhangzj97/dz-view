import type { RouteRecordRaw } from 'vue-router';

export const OtherRoute: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  component: () => import('../../../App.vue'),
};
