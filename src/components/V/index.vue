<script setup lang="ts">
defineProps<{
  // Size Css
  // size: string;
  s: string;
  // Wrap Css
  w?: string;

  // Flex Css
  // row?: boolean;
  col?: boolean;

  // Hover Css
  hover?: string;

  // Position Css
  absolute?: boolean;

  // Cursor Css
  pointer?: boolean;

  // Test and demo
  desc?: string;
}>();
</script>

<template>
  <div
    class="dz-view-v202301 dz-view"
    :class="[
      col ? 'flex-col dz-view-col' : 'flex-row dz-view-row',
      s,
      w,
      hover,
      absolute ? 'absolute' : 'relative',
      pointer && 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.dz-view-v202301.dz-view {
  @apply flex shrink-0 select-none;
  flex-grow: 0;

  &.dz-view-row {
    & > .w-grow {
      @apply w-0;
      flex-grow: 1;
    }
    & > .h-grow {
      @apply h-full;
    }
  }
  &.dz-view-col {
    & > .w-grow {
      @apply w-full;
    }
    & > .h-grow {
      @apply h-0;
      flex-grow: 1;
    }
  }
}
.dz-view-v202301.dz-view::-webkit-scrollbar {
  @apply w-0 h-0;
}
</style>
