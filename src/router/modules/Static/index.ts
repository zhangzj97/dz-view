export const OtherRoute = {
  path: '/:catchAll(.*)*',
  name: 'Other',
  component: () => import('../../../App.vue'),
};
