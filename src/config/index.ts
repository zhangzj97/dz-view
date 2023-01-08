const RootRoute = {
  name: 'Home',
  path: '/',
  redirect: '/StudyApp/Dashboard',
  meta: {
    id: 'root',
    code: 'StudyApp.route.StudyApp',
    url: `/`,
    target: 'self',
  },
};

export const config = {
  RootRoute,
};
