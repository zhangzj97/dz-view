<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <a-tooltip position="bottom">
      <template #title>{{ !isDark ? '点击进入暗色模式' : '点击进入暗色模式' }}</template>
      <dz-icon v-if="!isDark" pointer size="6" icon="ic:round-light-mode" @click="toggleDark()" />
      <dz-icon v-else pointer size="6" icon="ic:round-dark-mode" @click="toggleDark()" />
    </a-tooltip>
  </dz-view>
</template>
