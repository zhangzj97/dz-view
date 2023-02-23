import { config } from '../../../../config';

const scopeKey = config.ViewName;

export default [
  {
    name: scopeKey,
    path: '/sso',
    component: () => import('../../../../index.vue'),
    children: [
      {
        name: 'LOGIN',
        path: '/login',
        component: () => import('../../../../pages/Dz/Login/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../../../../index.vue'),
  },
];
