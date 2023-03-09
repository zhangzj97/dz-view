import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { i18n } from './locale';
import { router } from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#App');
