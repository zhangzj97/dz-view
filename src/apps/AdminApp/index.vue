<script setup lang="ts" name="App">
import LayoutPage from '../BaseLayout/common/layouts/AdminDz/index.vue';
import { config } from './common/config';
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
