import { beforeEnter } from './guards';

export { beforeEach } from './guards';

export const routes = [
  {
    name: 'Root',
    path: '/',
    redirect: '/AdminApp',
    children: [],
  },
  {
    name: 'NotFound',
    path: '/404',
    component: 'AdminApp',
    children: [],
    beforeEnter,
  },
  {
    name: 'Other',
    path: '/:pathMatch(.*)',
    redirect: '/AdminApp',
    children: [],
  },
];
