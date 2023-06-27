// 基本路由守卫
export const setupBaseGuard = router => {
  router.beforeEach(async (to, from, next) => {
    // NProgress.start();

    // NProgress.done();
    next();
    return;
  });
};
