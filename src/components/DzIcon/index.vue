<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;
  // Backgroud Css
  bg?: string;

  // source
  src?: string;
  // icon 降级选项
  icon?: string;

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
    class="dz-icon-v202301 dz-icon dz-icon-bg"
    :class="[
      'flex-row', // col ? 'flex-col dz-view-col' : 'flex-row dz-view-row',
      // t,
      s,
      w,
      bg,
      // hover,
      'relative', // absolute ? 'absolute' : 'relative',
      pointer && 'cursor-pointer',
    ]"
    :style="
      src && {
        backgroundImage: `url(${src})`,
      }
    "
  >
    <Icon v-if="icon" class="w-full h-full" :icon="icon" :class="[t, hover]" />
  </div>
</template>

<style scoped lang="scss">
.dz-icon-v202301.dz-icon {
  @apply flex shrink-0;
  flex-grow: 0;

  &.dz-icon-bg {
    @apply bg-no-repeat bg-contain;
  }
}
</style>
