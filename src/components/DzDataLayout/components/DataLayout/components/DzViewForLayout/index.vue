<script setup lang="ts">
const props = defineProps<{
  one?: boolean;
  col?: boolean;
  row?: boolean;
  grid?: boolean;

  relative?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  position?: string;

  overflow?: boolean;
  overflowHidden?: boolean;

  grow?: number | boolean | string;
  // shrink?: number | boolean | string;
  size?: string;
}>();

const parseSizeClassName = () => {
  const className = {
    width: props.size?.match(/w-[^\s].*/)?.[0] || 'w-auto',
    height: props.size?.match(/h-[^\s].*/)?.[0] || 'h-auto',
  };

  return [className.width, className.height];
};
</script>

<template>
  <div
    class="dz-view"
    :class="[
      //
      !fixed && !absolute && 'relative',
      fixed && 'fixed',
      absolute && 'absolute',
      ...parseSizeClassName(),
      // 'border-2 bg-green-300 border-green-600',
      'border-transparent',
      'bg-transparent',
      position,
    ]"
    :style="{
      // flexGrow: Number(grow),
      // flexShrink: Number(shrink),
    }"
  >
    <div
      class="dz-view-wrapper"
      :class="[
        //
        'flex',
        'relative',
        one && 'flex-col flex-nowrap',
        col && 'flex-col flex-nowrap',
        row && 'flex-row flex-nowrap',
        grid && 'flex-row flex-wrap',
        overflow && 'overflow-auto',
        overflowHidden && 'overflow-hidden',
        'w-grow h-auto',
        // 'border-2 bg-cyan-300 border-cyan-600',
        'border-transparent',
        'bg-transparent',
      ]"
      :style="{}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dz-view {
  @apply flex flex-row flex-nowrap;
}

.dz-view-wrapper {
  @apply flex flex-grow w-0 h-auto;
}

.dz-view-wrapper::-webkit-scrollbar {
  @apply w-0 h-0;
}

.dz-view-wrapper[overflow] {
  @apply overflow-auto;
}

.dz-view-wrapper[overflow-hidden] {
  @apply overflow-hidden;
}
</style>

<style scoped>
.h-grow {
  @apply flex-grow h-0;
}
.w-grow {
  @apply flex-grow w-0;
}
</style>
