<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover placement="bottom" :tooltip="!isDark ? '点击进入暗色模式' : '点击进入明亮模式'">
      <dz-icon v-if="!isDark" pointer size="6" icon="ic:round-light-mode" @click="toggle()" />
      <dz-icon v-else pointer size="6" icon="ic:round-dark-mode" @click="toggle()" />
    </dz-popover>
  </dz-view>
</template>
