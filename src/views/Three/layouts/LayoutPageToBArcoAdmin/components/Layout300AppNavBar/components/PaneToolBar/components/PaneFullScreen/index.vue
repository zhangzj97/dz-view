<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover placement="bottom" :tooltip="!isFullscreen ? '点击进入全屏模式' : '点击退出全屏模式'">
      <dz-icon v-if="!isFullscreen" pointer size="6" icon="ic:round-fullscreen" @click="toggle" />
      <dz-icon v-else pointer size="6" icon="ic:round-fullscreen-exit" @click="toggle" />
    </dz-popover>
  </dz-view>
</template>
