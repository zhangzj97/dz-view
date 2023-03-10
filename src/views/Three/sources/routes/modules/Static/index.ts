import { config } from '../../../../config';

const scopeKey = config.ViewName;

export default [
  {
    name: scopeKey,
    path: '/',
    component: () => import('../../../../index.vue'),
    children: [
      {
        name: 'ExceptionPage404',
        path: '/404',
        redirct: '/404',
        component: () =>
          import('../../../../pages/Demo/Exception404/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../../../../index.vue'),
  },
];
