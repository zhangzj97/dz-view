<script setup lang="ts" name="App1">
import LayoutPage from '../LayoutApp/layouts/AdminDz/index.vue';
import { config } from './config';
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
@import url(./assets/index.scss);
</style>

<style lang="scss">
@import url(./assets/images/index.scss);
@import url(./assets/icons/index.scss);
</style>

<style>
body {
  overflow: hidden;
}
</style>
