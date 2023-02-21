import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { createRouteGuard } from './guard';
import { RootRoute, OtherRoute } from './modules/Static';

// 注册 基本的路由 , 路由是不需要 Store 的资源
import { useSourceRouteStore } from '@/hooks/useSourceStore';
const { initSourceImportRaw } = useSourceRouteStore();
const { list: routeList } = await initSourceImportRaw();

export const routes: RouteRecordRaw[] = [RootRoute, ...routeList, OtherRoute];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createRouteGuard(router);
