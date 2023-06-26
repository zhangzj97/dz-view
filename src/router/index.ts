import { createRouter, createWebHistory } from 'vue-router';
import { createRouteGuard } from './guard';
import { routes } from '@/resources/routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createRouteGuard(router);
