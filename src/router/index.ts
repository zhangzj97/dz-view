import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { createRouteGuard } from './guard';
import { RootRoute } from './modules/Static';
import { useSourceRouteSetup } from '@/hooks/useSourceSetup';

const { routeWithScopeRoot } = useSourceRouteSetup();

export const routes: RouteRecordRaw[] = [RootRoute, ...routeWithScopeRoot];

export const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });

createRouteGuard(router);
