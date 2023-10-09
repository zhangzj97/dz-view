import { beforeEnter } from './guards';

export { beforeEach } from './guards';

export const routes = [
  {
    name: 'Root',
    path: '/',
    redirect: '/User',
    children: [],
  },
  {
    name: 'NotFound',
    path: '/404',
    redirect: '/',
    children: [],
  },
  {
    name: 'Other',
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    name: 'Tree',
    path: '/Tree',
    redirect: '/Tree/Tree100',
    component: () => import('@/pages/Tree/index.vue'),
    children: [
      { name: 'Tree/Tree100', path: '/Tree/Tree100', component: () => import('@/pages/Tree/Tree100/index.vue') },
      { name: 'Tree/Tree200', path: '/Tree/Tree200', component: () => import('@/pages/Tree/Tree200/index.vue') },
      { name: 'Tree/Tree210', path: '/Tree/Tree210', component: () => import('@/pages/Tree/Tree210/index.vue') },
      { name: 'Tree/Tree220', path: '/Tree/Tree220', component: () => import('@/pages/Tree/Tree220/index.vue') },
      { name: 'Tree/Tree300', path: '/Tree/Tree300', component: () => import('@/pages/Tree/Tree300/index.vue') },
      { name: 'Tree/Tree310', path: '/Tree/Tree310', component: () => import('@/pages/Tree/Tree310/index.vue') },
      { name: 'Tree/Tree320', path: '/Tree/Tree320', component: () => import('@/pages/Tree/Tree320/index.vue') },
      { name: 'Tree/Tree311', path: '/Tree/Tree311', component: () => import('@/pages/Tree/Tree311/index.vue') },
      { name: 'Tree/Tree312', path: '/Tree/Tree312', component: () => import('@/pages/Tree/Tree312/index.vue') },
      { name: 'Tree/Tree321', path: '/Tree/Tree321', component: () => import('@/pages/Tree/Tree321/index.vue') },
      { name: 'Tree/Tree322', path: '/Tree/Tree322', component: () => import('@/pages/Tree/Tree322/index.vue') },
    ],
  },

  {
    name: 'Test',
    path: '/Test',
    redirect: '/Test/Btn',
    component: () => import('@/pages/Test/index.vue'),
    children: [
      { name: 'Test/Btn', path: '/Test/Btn', component: () => import('@/pages/Test/Btn/index.vue') },
      { name: 'Test/Popup', path: '/Test/Popup', component: () => import('@/pages/Test/Popup/index.vue') },
    ],
  },
  {
    name: 'Form',
    path: '/Form',
    redirect: '/Form/Btn',
    component: () => import('@/pages/Form/index.vue'),
    children: [
      { name: 'Form/Control', path: '/Form/Control', component: () => import('@/pages/Form/Control/index.vue') },
      { name: 'Form/Time', path: '/Form/Time', component: () => import('@/pages/Form/Time/index.vue') },
      { name: 'Form/String', path: '/Form/String', component: () => import('@/pages/Form/String/index.vue') },
      { name: 'Form/Picker', path: '/Form/Picker', component: () => import('@/pages/Form/Picker/index.vue') },
    ],
  },
  {
    name: 'User',
    path: '/User',
    redirect: '/User/User',
    component: () => import('@/pages/User/index.vue'),
    children: [
      { name: 'User/User', path: '/User/User', component: () => import('@/pages/User/User/index.vue') },
      {
        name: 'User/UserProfile',
        path: '/User/UserProfile',
        component: () => import('@/pages/User/UserProfile/index.vue'),
      },
    ],
  },
];
