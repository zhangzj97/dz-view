import { config } from '../../../../config';

const scopeKey = config.ViewName;

export default {
  [scopeKey]: {
    name: scopeKey,
    path: `/${scopeKey}`,
    component: () => import('../../../../index.vue'),
    children: [],
  },
  Login: {
    name: 'Login',
    path: '/Login',
    component: () => import('../../../../index.vue'),
    children: [
      {
        name: 'DzLogin',
        path: '/DzLogin',
        component: () => import('../../../../pages/Dz/Login/index.vue'),
      },
    ],
  },
};
