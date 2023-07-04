<script setup lang="ts"></script>

<template>
  <dz-popover
    tooltip="没有外层嵌套: 1. 空白处无法触发 pointer/hover; 2. popover 位置错误"
  >
    <v-icon
      s="w-16 h-grow"
      t="text-red-500"
      class="scale-50"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      icon="mdi:dice-1"
    />
  </dz-popover>
</template>
