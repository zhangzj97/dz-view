import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

const { debug } = useLog({ module: 'Main', color: 'blue' });

debug('初始化 App');
const app = createApp(App);

debug('安装中间件 Pinia');
app.use(createPinia());

debug('安装中间件 Router');
app.use(router);

debug('挂载 #App');
app.mount('#App');
