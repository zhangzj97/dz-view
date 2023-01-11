<script setup lang="ts" name="App">
import LayoutPage from './layouts/LayoutPageDemo/index.vue';
</script>

<template>
  <div class="relative flex flex-row flex-grow-0 w-screen h-screen overflow-hidden">
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="[]">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
@import url(./assets/index.scss);

.bg-page {
  background-position-x: -280px;
  background-size: calc(100% + 280px);
  background-repeat: no-repeat;

  position: absolute;
  width: 100%;
  height: 1000px;
}
</style>

<style lang="scss">
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
