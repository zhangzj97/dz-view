import { router } from '@/router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// NProgress
NProgress.configure({ showSpinner: false });

const { dispatch } = useService();
const { debug } = useLog({ module: 'AdminApp/Guard', color: 'blue' });

const refreshMenuAndRedirectName = async rePath => {
  const { data } = await dispatch('Dz/Route.RefreshMenu', {});

  let redirectName = '';

  debug('开始注册路由', 'RegisterRoute');
  data.menu.forEach(item => {
    const { component, code, appName, path, id, title } = item;

    if (!component) {
      debug(`无法注册: 不是路由 ${code}-${id}`, 'RegisterRoute');
      return;
    }

    if (!router.hasRoute(appName)) {
      debug(`无法注册: 没有 appName ${code}-${id}`, 'RegisterRoute');
      return;
    }

    debug(`可以注册 ${code}-${id}`, 'RegisterRoute');

    if (String(rePath).toLowerCase() === String(path).toLowerCase()) {
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

  return redirectName;
};

export const beforeEnter = async (to, from, next) => {
  const { redirectedFrom } = to;

  // 判断参数
  const toName = to.name;
  const toPath = to.path;
  const fromName = from.name;
  const fromPath = from.path;
  const reName = redirectedFrom?.name;
  const rePath = redirectedFrom?.path;
  // console.table({ toName, toPath, fromName, fromPath, reName, rePath });

  // 循环后存在
  if (reName === 'Other' && toPath === rePath) {
    debug('第二轮 可以访问路由');

    next();
    return;
  } else {
    debug('第一轮开始 beforeEnter');
  }

  if (toName === 'NotFound') {
    debug('直接访问 /404');
    next();
    return;
  }

  if (!reName && !fromName && fromPath === '/') {
    debug('直接访问 已经注册的路由 但需要初始化');
    await refreshMenuAndRedirectName(rePath);
    next();
    return;
  }

  if (!reName) {
    debug('直接访问 已经注册的路由');
    next();
    return;
  }

  if (reName === 'Root') {
    debug('直接访问 /');
    next();
    return;
  }

  if (reName === 'Other' && toPath !== rePath) {
    debug('未注册的路由');

    const redirectName = await refreshMenuAndRedirectName(rePath);

    if (!redirectName) {
      debug(`注册完后没有该数据 访问/404`);

      next({ name: 'NotFound' });
      return;
    }

    if (redirectName) {
      debug(`注册完后存在该数据 访问路由`);
      next({ name: redirectName });
      return;
    }
  }
};

export const beforeEach = async () => {
  NProgress.start();
  NProgress.done();
};
