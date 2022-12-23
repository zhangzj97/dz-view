import { config } from '../config';

const children: any[] = [];
const modules = {};
const pageMap = import.meta.glob('../pages/*/index.vue', { eager: true });

Object.entries(pageMap).forEach(([key, value]: [string, any]) => {
  const pageName = `${config.ViewName}/${key.replace(/\.\.\/pages\/|\/index\.vue/g, '')}`;
  modules[pageName] = value;

  children.push({ name: pageName, path: `/${pageName}`, component: value?.default });
});

export const route = [{ name: config.ViewName, path: `/${config.ViewName}`, redirect: `/${config.ViewName}/Home`, component: () => import('../index.vue'), children }];
