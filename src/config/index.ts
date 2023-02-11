const RootRoute = {
  name: 'Home',
  path: '/',
  redirect: '/RefAcroAdmin',
  meta: {
    id: 'root',
    code: 'RefAcroAdmin.ROUTE',
    url: `/`,
    target: 'self',
  },
};

export const config = {
  RootRoute,
};
