import data from '@/resources/routes/data.json';

export const routes = data.map(item => {
  const component = item.component.replace(/^\/|\/$/g, '');
  const [c1] = component.split('/');
  return {
    name: item.name,
    path: item.path,
    component: () => import(`../../apps/${c1}/index.vue`),
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
