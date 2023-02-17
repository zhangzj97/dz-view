<script setup lang="ts">
defineProps<{
  baseList: any[];
}>();
</script>

<template>
  <dz-view col size="w-24" bg="bg-white">
    <template v-for="(item, index) of baseList" :key="index">
      <dz-view one pointer size="h-8" position="5" class="hover:bg-gray-100">
        <dz-font pointer>{{ item.title }}</dz-font>
      </dz-view>
    </template>
  </dz-view>
</template>
