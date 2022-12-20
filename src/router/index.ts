import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { route as StudyAppRoutes } from '../views/StudyApp/routes';

const routes: RouteRecordRaw[] = [{ name: 'Home', path: '/', redirect: '/StudyApp/Dashboard' }, ...StudyAppRoutes];

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });

export { router };
export { routes };
