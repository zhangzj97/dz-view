<script setup lang="ts">
defineProps<{
  baseList: any[];
}>();
</script>

<template>
  <dz-view grid pointer size="w-96" bg="bg-white" wrapper-class="p-2">
    <template v-for="(item, index) of baseList" :key="index">
      <dz-view col size="w-1/3 h-24" wrapper-class="p-2 transition-all rounded hover:bg-gray-100">
        <dz-view one size="h-16" :bg="item.bg"></dz-view>
        <dz-view one size="h-grow" position="5">
          <dz-font>{{ item.title }}</dz-font>
        </dz-view>
      </dz-view>
    </template>
  </dz-view>
</template>
