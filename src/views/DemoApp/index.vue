<script setup lang="ts" name="App">
import LayoutPage from './layouts/LayoutPageDemo/index.vue';
</script>

<template>
  <LayoutPage>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :include="[]">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </LayoutPage>
</template>
