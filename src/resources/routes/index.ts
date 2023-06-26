import data from '@/resources/routes/data.json';

export const routes = data.map(item => {
  return {
    name: item.name,
    path: item.path,
    component: () => import(item.component),
    children: item.children.map(item => {
      return {
        name: item.name,
        path: item.path,
        component: () => import(item.component),
      };
    }),
  };
});
