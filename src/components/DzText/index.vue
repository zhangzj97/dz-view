<script setup lang="ts">
defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t: string;

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
    class="dz-text-v202301 dz-text"
    :class="[
      'flex-row', // col ? 'flex-col dz-view-col' : 'flex-row dz-view-row',
      t,
      s,
      w,
      hover,
      'relative', // absolute ? 'absolute' : 'relative',
      pointer && 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.dz-text-v202301.dz-text {
  @apply flex shrink-0;
  flex-grow: 0;
}
</style>
