import { createRouter, createWebHistory } from 'vue-router';
import { createRouteGuard } from './guard';
import { OtherRoute } from './modules/Static/';

export const routes = [OtherRoute];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createRouteGuard(router);
