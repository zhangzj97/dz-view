<script setup lang="ts">
defineProps<{
  baseList: any[];
}>();
</script>

<template>
  <dz-view col size="w-32" class="max-h-48" overflow bg="bg-white">
    <template v-for="(item, index) of baseList" :key="index">
      <dz-view one pointer size="h-8" position="5" class="hover:bg-gray-100 shrink-0">
        <dz-font pointer sm>{{ item.title }}</dz-font>
      </dz-view>
    </template>
  </dz-view>
</template>
