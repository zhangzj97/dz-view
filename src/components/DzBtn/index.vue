<script setup lang="ts">
defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;

  // source
  src?: string;
  // icon 降级选项
  icon?: string;

  // Text
  text?: string;

  // Flex Css
  // row?: boolean;
  // col?: boolean;

  // Hover Css
  hover?: string;

  // Position Css
  // absolute?: boolean;

  // Cursor Css
  pointer?: boolean;

  // Test and demo
  desc?: string;
}>();
</script>

<template>
  <div
    class="dz-btn-v202301 dz-btn"
    :class="[
      'flex-row', // col ? 'flex-col dz-view-col' : 'flex-row dz-view-row',
      'bg-blue-400',
      // t,
      'w-fit h-fit', // s,
      'py-1', // w,
      'hover:opacity-90', // hover,
      'active:opacity-75',
      'relative', // absolute ? 'absolute' : 'relative',
      'cursor-pointer', //pointer && 'cursor-pointer',
      'shadow-lg rounded-md',
      'items-center',
    ]"
  >
    <v s="w-2 h-grow" space></v>
    <dz-icon
      v-if="icon"
      :icon="icon"
      s="w-6 h-6"
      w="min-w-[8px] min-h-[8px]"
      t="text-white"
      class="scale-75"
    />
    <dz-text t="text-white" :text="text" />
    <v s="w-2 h-grow" space></v>
  </div>
</template>

<style scoped lang="scss">
.dz-btn-v202301.dz-btn {
  @apply flex shrink-0;

  flex-grow: 0;
}
</style>
