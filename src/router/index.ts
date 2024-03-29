import { createRouter, createWebHistory } from 'vue-router';
import { beforeEach, routes } from './route';

const { debug } = useLog({ module: 'SrcRouter', color: 'blue' });

debug('使用 History 模式');
debug('使用 @/resources/routes 初步构建路由');
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

debug('使用 @/resources/routes 注册 beforeEach');
router.beforeEach(beforeEach);
