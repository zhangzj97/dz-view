import { config } from '../config';

const result: any = { modules: {}, list: [] };
const fileHandler = ([key, value]: [string, any]) => {
  const pageName = `${key.replace(/\.\.\/pages\/|\/index\.vue/g, '')}`;
  const routeName = `${config.ViewName}/${pageName}`;
  result.modules[routeName] = value;
  const meta = {
    id: [config.ViewName, 'ROUTE', pageName].join(config.i18nSeparator),
    code: [config.ViewName, 'ROUTE', pageName].join(config.i18nSeparator),
    url: `/${routeName}`,
    target: 'self',
  };
  result.list.push({ name: routeName, path: `/${routeName}`, component: value?.default, meta });
};
const fileMap = import.meta.glob(['../pages/**/*/index.vue', '!../pages/**/*components/**/index.vue'], { eager: true });
Object.entries(fileMap).forEach(fileHandler);

export const route = [
  {
    name: config.ViewName,
    path: `/${config.ViewName}`,
    redirect: `/${config.ViewName}/${config.HomePageName}`,
    component: () => import('../index.vue'),
    children: result.list,
    meta: {
      id: [config.ViewName, 'ROUTE', config.ViewName].join(config.i18nSeparator),
      code: [config.ViewName, 'ROUTE'].join(config.i18nSeparator),
      url: `/${config.ViewName}`,
      target: 'self',
    },
  },
];
