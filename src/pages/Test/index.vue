<script setup lang="ts" name="App">
import { LayoutProvider } from '../__components';
import { config } from '@/config';

// 处理layout相关
config.layout.logo.icon1 =
  '//iconfont.alicdn.com/p/illus/preview_image/236S9himnWZN/699745e2-fcac-4869-9b1a-92a1169a49db.png';
config.layout.logo.icon2 = '';
config.layout.logo.text = '达泽T科技';

provide('config', config);
</script>

<template>
  <LayoutProvider>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slide" mode="out-in" appear>
        <KeepAlive :include="[]">
          <Component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </LayoutProvider>
</template>
