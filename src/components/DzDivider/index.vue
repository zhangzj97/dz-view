<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <dz-view row size="h-fit w-full">
    <dz-view one size="w-8" class="min-w-[2rem]">
      <dz-view one size="h-1/2" wrapperClass="border-b-[1px] border-gray-300" />
    </dz-view>
    <dz-view one size="w-fit" wrapperClass="px-2">
      <slot></slot>
    </dz-view>
    <dz-view one size="w-grow">
      <dz-view one size="h-1/2" class="min-w-[2rem]" wrapperClass="border-b-[1px] border-gray-300" />
    </dz-view>
  </dz-view>
</template>
