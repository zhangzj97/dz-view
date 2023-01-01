import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { route as RemoteRoute } from './modules/Remote';
import { route as LocalRoute } from './modules/Local';
import { route as CustomRoute } from './modules/Custom';

export const routes: RouteRecordRaw[] = [...RemoteRoute, ...LocalRoute, ...CustomRoute];

export const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });

console.log(routes);
