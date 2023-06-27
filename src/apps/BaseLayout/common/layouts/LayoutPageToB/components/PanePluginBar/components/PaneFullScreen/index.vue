<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <dz-popover
    placement="bottom"
    :tooltip="!isFullscreen ? '点击进入全屏模式' : '点击退出全屏模式'"
  >
    <dz-view
      one
      pointer
      size="h-grow"
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
    >
      <dz-icon
        size="6"
        :icon="
          !isFullscreen ? 'ic:round-fullscreen' : 'ic:round-fullscreen-exit'
        "
        @click="toggle"
      />
    </dz-view>
  </dz-popover>
</template>
