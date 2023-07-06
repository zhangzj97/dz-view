import { createRouter, createWebHistory } from 'vue-router';
import { beforeEach, routes } from '@/resources/routes';
import { buildRoute } from './tools';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: buildRoute(routes),
});

router.beforeEach(beforeEach);
