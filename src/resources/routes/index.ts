import { beforeEnter as beforeEnterBaseLayout } from '@/apps/BaseLayout/common/guards';
import { beforeEnter as beforeEnterBasePlugin } from '@/apps/BasePlugin/common/guards';
import { beforeEnter as beforeEnterBaseLocale } from '@/apps/BaseLocale/common/guards';
import { beforeEnter as beforeEnterAdminApp } from '@/apps/AdminApp/common/guards';

export { beforeEach } from '@/apps/AdminApp/common/guards';

export const routes = [
  {
    name: 'BaseLayout',
    path: '/BaseLayout',
    component: 'BaseLayout',
    children: [],
    meta: { menu: {} },
    beforeEnter: beforeEnterBaseLayout,
  },
  {
    name: 'BasePlugin',
    path: '/BasePlugin',
    component: 'BasePlugin',
    children: [],
    meta: { menu: {} },
    beforeEnter: beforeEnterBasePlugin,
  },
  {
    name: 'BaseLocale',
    path: '/BaseLocale',
    component: 'BaseLocale',
    children: [],
    meta: { menu: {} },
    beforeEnter: beforeEnterBaseLocale,
  },
  {
    name: 'AdminApp',
    path: '/AdminApp',
    component: 'AdminApp',
    children: [
      // !!!! 不应该有
      // {
      //   name: 'AdminApp/Demo/T1',
      //   path: '/Demo/T1',
      //   component: '/AdminApp/pages/Demo/T1',
      // },
      // {
      //   name: 'AdminApp/Demo/T1',
      //   path: '/Demo/T1',
      //   component: '/AdminApp/pages/Demo/T1',
      // },
      // {
      //   name: 'AdminApp/Demo/T2',
      //   path: '/Demo/T2',
      //   component: '/AdminApp/pages/Demo/T2',
      // },
      // {
      //   name: 'AdminApp/Demo02/T1',
      //   path: '/Demo02/T1',
      //   component: '/AdminApp/pages/Demo02/T1',
      // },
      // {
      //   name: 'AdminApp/Demo02/T2',
      //   path: '/Demo02/T2',
      //   component: '/AdminApp/pages/Demo02/T2',
      // },
    ],
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
