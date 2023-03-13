import { config } from '../../../../config';
const scopeKey = config.ViewName;

const routeMate = { access: { scope: scopeKey } };

export default {
  Router: {
    name: 'Router',
    path: '/Router',
    component: () => import('../../../../pages/Router/index.vue'),
    meta: routeMate,
  },
  [scopeKey]: {
    name: scopeKey,
    path: `/${scopeKey}`,
    component: () => import('../../../../index.vue'),
    children: [
      {
        name: '404',
        path: '/404',
        component: () =>
          import('../../../../pages/Demo/Exception404/index.vue'),
        meta: routeMate,
      },
    ],
    meta: routeMate,
  },
};
