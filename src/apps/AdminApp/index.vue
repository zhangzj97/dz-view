<script setup lang="ts" name="App">
// import LayoutPage from '../BaseLayout/common/layouts/AdminDz/index.vue';
import LayoutPage from '../BaseLayout/common/layouts/AdminDzTest/index.vue';
import { config } from './common/config';

// 处理layout相关
config.layout.logo.icon1 =
  '//iconfont.alicdn.com/p/illus/preview_image/236S9himnWZN/699745e2-fcac-4869-9b1a-92a1169a49db.png';
config.layout.logo.icon2 = '';
config.layout.logo.text = '达泽科技';
config.layout.logo.icon1Style = 'scale-90';
config.layout.logo.icon2Style = 'text-black';
config.layout.logo.textStyle = 'text-3xl text-gray-300 font-black ';

provide('config', config);
</script>

<template>
  <LayoutPage>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slide" mode="out-in" appear>
        <KeepAlive :include="[]">
          <Component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </LayoutPage>
</template>

<style lang="scss">
@import url(./common/assets/index.scss);
</style>

<style lang="scss">
@import url(./common/assets/images/index.scss);
@import url(./common/assets/icons/index.scss);
</style>
