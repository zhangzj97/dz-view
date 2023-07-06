import { routes as routeList } from './auto';

export const routes = routeList.map(item => {
  if (!item.component) return item;

  const component = item.component.replace(/^\/|\/$/g, '');
  const [c1] = component.split('/');

  return {
    name: item.name,
    path: item.path,
    component: () => import(`../../apps/${c1}/index.vue`),
    beforeEnter: item.beforeEnter,
    children: item.children.map(item2 => {
      const component = item2.component.replace(/^\/|\/$/g, '');
      const [c1, c2, c3, c4] = component.split('/');
      return {
        name: item2.name,
        path: item2.path,
        component: () => import(`../../apps/${c1}/${c2}/${c3}/${c4}/index.vue`),
      };
    }),
  };
});
