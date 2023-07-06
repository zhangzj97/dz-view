import { useService } from '@/hooks/useService';
import { router } from '@/router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// NProgress
NProgress.configure({ showSpinner: false });

const { dispatch } = useService();

export const beforeEnter = async (to, from, next) => {
  NProgress.start();
  console.log('NProgress.start');

  const { redirectedFrom } = to;

  // 判断参数
  const toName = to.name;
  const toPath = to.path;
  const fromName = from.name;
  const fromPath = from.path;
  const reName = redirectedFrom?.name;
  const rePath = redirectedFrom?.path;

  console.log({ toName, toPath, fromName, fromPath, reName, rePath });

  console.log('[Step 0]: 路由');

  // 404
  if (toName === 'NotFound') {
    console.log('[Step 1]: 404');

    next();
    return;
  }

  // 已经存在的路由
  if (!reName) {
    console.log('[Step 1]: 已经存在的路由');
    next();
    return;
  }

  // 根路由
  if (reName === 'Root') {
    console.log('[Step 1]: 根路由');
    next();
    return;
  }

  // 未存在的路由
  if (reName === 'Other' && toPath !== rePath) {
    console.log('[Step 1]: 未存在的路由');

    const { data } = await dispatch('Dz/Route.RefreshMenu', {});

    let redirectName = '';

    data.menu.forEach(item => {
      const { component, code, appName, path, id, title } = item;

      if (!component) {
        console.log('[Step 2]: 不是路由', code, title, id);
        return;
      }

      console.log('[Step 2]: 是路由', code, title, id);

      if (!router.hasRoute(appName)) {
        console.log('[Step 2]: 没有 appName', code, title, id);
        return;
      }

      // console.log({
      //   x: String(redirectedFrom.path).toLowerCase(),
      //   y: String(path).toLowerCase(),
      // });

      if (
        String(redirectedFrom.path).toLowerCase() === String(path).toLowerCase()
      ) {
        redirectName = code;
      }

      const [c1, c2, c3, c4, c5] = component.split('/');
      router.addRoute(appName, {
        name: code,
        path,
        meta: { menu: item },
        component: () => import(`../../pages/${c4}/${c5}/index.vue`),
      });
    });

    if (!redirectName) {
      console.log('[Step 3]: 还是没有 去 404');

      next({ name: 'NotFound' });
      return;
    }

    if (redirectName) {
      console.log('[Step 3]: 更新后有了');
      next({ name: redirectName });
      return;
    }
  }

  // 循环后存在
  if (reName === 'Other' && toPath === rePath) {
    console.log('[Step 1]: 循环后存在');

    next();
    return;
  }

  next();
  return;
};

export const beforeEach = async () => {
  NProgress.start();
  console.log('NProgress.start');
};
