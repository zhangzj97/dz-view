export { beforeEnter, beforeEach } from './guards';

const files1 = import.meta.glob('@/pages/*/index.vue');
const files2 = import.meta.glob('@/pages/*/*/index.vue');

const routeMap1 = {};
Object.entries(files1).forEach(([key, value]) => {
  const key2 = key.replace(/\/src\/pages\/|\/index.vue/g, '');
  routeMap1[key2] = {
    name: key2,
    path: `/${key2}`,
    redirect: '', // todo
    component: value,
    children: [],
  };
});

Object.entries(files2).forEach(([key, value]) => {
  const key3 = key.replace(/\/src\/pages\/|\/index.vue/g, '');
  const key2 = key3.replace(/\/.*/, '');
  if (!routeMap1[key2]) return;
  routeMap1[key2].children.push({
    name: key3,
    path: `/${key3}`,
    component: value,
  });
});

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

  ...Object.values(routeMap1),
];
