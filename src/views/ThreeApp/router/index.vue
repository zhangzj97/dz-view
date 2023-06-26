<script setup lang="ts">
import { useService } from '@/hooks/useService';
import { config } from '../config';
const scopeKey = config.ViewName;

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const { dispatch } = useService();

  // 先补充 white list 的 permission
  const WhiteListPermission = {
    404: {},
    Router: {},
    Login: {},
    DzLogin: {},
  };
  await dispatch('SourceAccessPermission.AddPermission', {
    codeMap: WhiteListPermission,
    cache: true,
  });

  // Auth
  const { data: AuthData } = await dispatch('SourceAuth.Find', {
    remote: false,
  });
  const { token, expireTime } = AuthData;
  if (!token) {
    console.log('先去登录');
    router.push({ name: 'DzLogin', query: { redirct: route.query.redirct } });
    return;
  } else if (token && (!expireTime || expireTime <= Date.now())) {
    console.log('过期了 先去登录');
    await dispatch('SourceAuth.Logout', {});
    await dispatch('SourceAuth.Update', { value: {} });
    await dispatch('SourceAccess.Update', { value: {}, cache: true });
    await dispatch('SourceAccessMenu.Update', { value: {}, cache: true });
    await dispatch('SourceAccessPermission.Update', { value: {}, cache: true });
    await dispatch('SourceAccessRoute.Update', { value: {}, cache: true });
    await dispatch('SourceAccessRouteTag.Update', { value: {}, cache: true });
    await dispatch('SourceAccessPermission.AddPermission', {
      codeMap: WhiteListPermission,
      cache: true,
    });
    router.replace({
      name: 'DzLogin',
      query: { redirct: route.query.redirct },
    });
    return;
  }

  // 去加载页面权限
  const {
    data: { accessList },
  } = await dispatch('SourceAccess.Find', {
    remote: true,
  });
  const AccessData = Object.fromEntries(
    accessList.map((item: any) => [item.code, item])
  );

  // 更新一下 SourceAccess
  await dispatch('SourceAccess.Update', { value: AccessData, cache: true });
  console.log('查看更新的 access', AccessData);
  // 更新一下 SourceAccessMenu
  await dispatch('SourceAccessMenu.UpdateByAccess', {
    access: AccessData,
    cache: true,
  });
  // 更新一下 SourceAccessPermission
  await dispatch('SourceAccessPermission.UpdateByAccess', {
    access: AccessData,
    cache: true,
  });
  await dispatch('SourceAccessPermission.AddPermission', {
    codeMap: WhiteListPermission,
    cache: true,
  });
  // 更新一下 SourceAccessRoute
  await dispatch('SourceAccessRoute.UpdateByAccess', {
    access: AccessData,
    cache: false,
  });
  // 更新一下 SourceAccessRouteTag
  await dispatch('SourceAccessRouteTag.UpdateByAccess', {
    access: AccessData,
    cache: true,
  });

  // 注册新的页面
  const { data: AccessRouteData } = await dispatch('SourceAccessRoute.Find', {
    remote: false,
  });
  Object.values(AccessRouteData).forEach((item: any) => {
    router.addRoute(item.meta.access.scope, item);
  });

  // 没有 redirct
  if (route.query.redirct === '/' || !route.query.redirct) {
    console.log('我要去首页 /', scopeKey);
    router.push({ name: 'Demo/Fixed' });
    return;
  }
  const routeRedirct = router.resolve(String(route.query.redirct));
  if (['Other', '404'].includes(String(routeRedirct.name))) {
    console.log('我要去404', routeRedirct.name, routeRedirct);
    router.push({ name: '404', query: { redirct: route.query.redirct } });
    return;
  } else if (['Router'].includes(String(routeRedirct.name))) {
    console.log('我要去首页 Router', routeRedirct);
    router.push({ name: scopeKey });
    return;
  } else {
    console.log('我要去具体的', routeRedirct);
    router.push({ ...routeRedirct });
    return;
  }
});
</script>

<template>
  <div>加载中</div>
</template>
