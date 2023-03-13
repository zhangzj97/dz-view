import type { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useService } from '@/hooks/useService';

// NProgress
NProgress.configure({ showSpinner: false });

// 基本路由守卫
const setupBaseGuard = (router: Router) => {
  // 思路
  // 此处 只处理 route 和 permission 相关
  // 其他的 都转发到 Router 的路由做处理
  // 1. 没有注册 Router
  // 2. 当前路由没有注册
  // 3. 当前路由没有权限
  router.beforeEach(async (to, from, next) => {
    const { dispatch } = useService();

    // 是否注册 Router
    const hasRouteRouter = router.hasRoute('Router');
    if (!hasRouteRouter) {
      console.log('未注册 router');
      const { data: RouteData } = await dispatch('SourceRoute.SelectModule', {
        remote: false,
      });

      // 注册初始路由
      const staticRoute = Object.entries(RouteData).reduce(
        (prev, [, item]: any) => Object.assign(prev, item),
        {}
      );
      Object.entries(staticRoute).forEach(([, item]: any) => {
        router.addRoute(item);
      });

      // 此处要记录 to
      // 会在下一轮把 to 带过去
      next({ name: 'Router', query: { redirct: to.path } });
      return;
    }

    // Route
    const hasRoute = to.name && router.hasRoute(to.name);
    if (!hasRoute) {
      console.log('hasRoute 未注册路由');
      next({
        name: 'Router',
        query: { redirct: from.path },
      });
      return;
    }

    // Access
    const { data: AccessPermissionData } = await dispatch(
      'SourceAccessPermission.Find',
      { remote: false }
    );
    const hasAccessPermission = AccessPermissionData[to.name as string];
    if (!hasAccessPermission) {
      console.log('hasAccessPermission 没有权限', AccessPermissionData);
      next({
        name: 'Router',
        query: { redirct: from.path },
      });
      return;
    }

    //
    next();
    return;
  });
};

export const createRouteGuard = (router: Router) => {
  // 进度条
  NProgress.start();

  // 路由
  setupBaseGuard(router);

  // 进度条
  NProgress.done();
};
