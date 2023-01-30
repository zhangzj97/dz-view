<script setup lang="ts" name="App">
import LayoutPage from './layouts/LayoutPageToB/index.vue';
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
