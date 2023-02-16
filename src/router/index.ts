import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { createRouteGuard } from './guard';
import { useRoute } from './hooks/useRoute';
import { useSource } from '@/hooks/useSource';
import { RootRoute } from './modules/Static';

const { SourceList: SourceRouteList } = await useSource({ strategy: 'import', sourceName: 'route' });
const { routeWithScopeRoot } = useRoute({ raw: SourceRouteList });

export const routes: RouteRecordRaw[] = [RootRoute, ...routeWithScopeRoot];

export const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });

createRouteGuard(router);
