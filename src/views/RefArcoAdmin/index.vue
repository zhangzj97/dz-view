<script setup lang="ts" name="App1">
import LayoutPage from './layouts/LayoutPageToBArcoAdmin/index.vue';
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
@import './assets/index.scss';
</style>

<style scoped lang="scss">
/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
