import type { Router } from 'vue-router';
import { setRouteEmitter } from '../utils/route-listener';
// import setupUserLoginInfoGuard from './userLoginInfo';
// import setupPermissionGuard from './permission';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const setupPageGuard = (router: Router) => {
  router.beforeEach(async to => {
    NProgress.start();
    setRouteEmitter(to);
    NProgress.done();
  });
};

export const createRouteGuard = (router: Router) => {
  setupPageGuard(router);
  // setupUserLoginInfoGuard(router);
  // setupPermissionGuard(router);
};
