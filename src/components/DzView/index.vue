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

  bg?: string;
  transition?: boolean;
  pointer?: boolean;
  shadow?: string;

  wrapperClass?: string;
}>();

const parseSizeClassName = () => {
  const className = {
    width: props.size?.match(/w-[^\s].*/)?.[0] || 'w-auto',
    height: props.size?.match(/h-[^\s].*/)?.[0] || 'h-auto',
  };

  return [className.width, className.height];
};

const parsePositionClassName = () => {
  const className = {
    top: props.position?.match(/t-[^\s].*/)?.[0] || '',
    bottom: props.position?.match(/b-[^\s].*/)?.[0] || '',
    left: props.position?.match(/l-[^\s].*/)?.[0] || '',
    right: props.position?.match(/r-[^\s].*/)?.[0] || '',
  };

  return [className.top, className.bottom, className.left, className.right];
};

const parsePositionFlexClassName = () => {
  const flexAlignCode = props.position?.match(/^\d+$/)?.[0] || '00';
  const className = {
    flexAlign: `flex-align-${flexAlignCode}`,
  };

  return [className.flexAlign];
};
</script>

<template>
  <div
    class="dz-view"
    :class="[
      'flex',
      'flex-row flex-nowrap',
      //
      !fixed && !absolute && 'relative',
      fixed && 'fixed',
      absolute && 'absolute',
      ...parseSizeClassName(),
      ...parsePositionClassName(),
      // 'border-2 bg-green-300 border-green-600',
      'border-transparent',
      'bg-transparent',
      position,
      transition && 'transition-all',
      pointer && 'cursor-pointer',
      shadow,
    ]"
    :style="{
      // flexGrow: Number(grow),
      // flexShrink: Number(shrink),
    }"
  >
    <template v-if="bg">
      <div
        :class="[
          //
          'absolute',
          'w-full',
          'h-full',
          bg,
        ]"
      ></div>
    </template>

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
        ...parsePositionFlexClassName(),
        'flex-grow',
        'w-auto',
        'h-auto',
        // 'border-2 bg-cyan-300 border-cyan-600',
        // 'border-transparent',
        // 'bg-transparent',
        transition && 'transition-all',
        wrapperClass,
      ]"
      :style="{}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dz-view-wrapper::-webkit-scrollbar {
  @apply w-0 h-0;
}
</style>

<style scoped lang="scss">
@import url(./assets/index.scss);
</style>
