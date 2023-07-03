<script setup lang="ts"></script>

<template>
  <dz-popover tooltip="trans 属性不应该加在 icon 上, 点击空白处 和icon 不同">
    <v
      s="w-16 h-grow"
      t="text-red-500"
      trans="hover:bg-gray-100 active:bg-slate-200 active:text-blue-300"
      pointer
    >
      <dz-icon
        s="w-16 h-16"
        class="scale-50"
        trans="active:bg-blue-500"
        pointer
        icon="mdi:dice-1"
      />
    </v>
  </dz-popover>
</template>
