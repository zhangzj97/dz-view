<script setup lang="ts" name="App1">
import LayoutPage from './layouts/LayoutPageToBArcoAdmin/index.vue';
import { config } from './config';
provide('config', config);
</script>

<template>
  <layout-page>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :include="[]">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </layout-page>
</template>

<style lang="scss">
@import url(./assets/index.scss);
</style>

<style lang="scss">
@import url(./assets/images/index.scss);
@import url(./assets/icons/index.scss);
</style>
