import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { createRouteGuard } from './guard';
import { useSourceRoute, useSourceRouteTool } from '@/hooks/useSourceRoute';
import { RootRoute } from './modules/Static';

const { SourceRouteList } = useSourceRoute();
const { routeWithScopeRoot } = useSourceRouteTool({ raw: SourceRouteList });

export const routes: RouteRecordRaw[] = [RootRoute, ...routeWithScopeRoot];

export const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });

createRouteGuard(router);
