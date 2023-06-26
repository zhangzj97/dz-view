<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<template>
  <dz-popover
    placement="bottom"
    :tooltip="!isDark ? '点击进入暗色模式' : '点击进入明亮模式'"
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
        :icon="!isDark ? 'ic:round-light-mode' : 'ic:round-dark-mode'"
        @click="toggle()"
      />
    </dz-view>
  </dz-popover>
</template>
