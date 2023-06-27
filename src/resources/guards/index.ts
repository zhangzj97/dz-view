import type { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { setupBaseGuard } from '@/apps/AdminApp/common/guards';

// NProgress
NProgress.configure({ showSpinner: false });

export const createRouteGuard = (router: Router) => {
  // 路由
  setupBaseGuard(router);
};
