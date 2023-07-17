import { beforeEnter as beforeEnterAdminApp } from '@/apps/AdminApp/common/guards';

export { beforeEach } from '@/apps/AdminApp/common/guards';

export const routes = [
  {
    name: 'AdminApp',
    path: '/AdminApp',
    component: 'AdminApp',
    children: [],
    meta: { menu: {} },
    beforeEnter: beforeEnterAdminApp,
  },
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
    beforeEnter: beforeEnterAdminApp,
  },
  {
    name: 'Other',
    path: '/:pathMatch(.*)',
    redirect: '/AdminApp',
    children: [],
  },
];
