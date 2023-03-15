<script setup lang="ts">
import { useDzView } from './hooks/useDzView';
import { useView } from './hooks/useView';

const props = defineProps<{
  // Flex
  one?: boolean;
  col?: boolean;
  row?: boolean;
  grid?: boolean;

  // Position
  relative?: boolean;
  absolute?: boolean;
  fixed?: boolean;

  position?: string;

  overflow?: boolean;
  overflowHidden?: boolean;

  grow?: number | boolean | string;
  // shrink?: number | boolean | string;

  // Size
  size?: string;

  bg?: string;
  transition?: boolean;

  // Cursor
  pointer?: boolean;

  shadow?: string;

  /**
   * @deprecated
   */
  wrapperClass?: string | string[];

  wrapClass?: string | string[];
}>();

const {
  viewDisplayCSS,
  viewPositionCSS,
  viewFlexCSS,
  viewFlexAlign,
  viewSizeWidthCSS,
  viewSizeHeightCSS,
  viewShadowCSS,
  viewCursorCSS,
  viewTransitionCSS,

  wrapDisplayCSS,
  wrapPositionCSS,
  wrapFlexCSS,
  wrapFlexAlign,
  wrapSizeWidthCSS,
  wrapSizeHeightCSS,
  wrapShadowCSS,
  wrapCursorCSS,
  wrapTransitionCSS,

  wrapOtherCSS,
} = useView({
  props,
});

const { wrapperClass } = useDzView({ props });

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
      viewDisplayCSS(),
      viewPositionCSS(),
      viewFlexCSS(),
      viewSizeWidthCSS(),
      viewSizeHeightCSS(),
      //
      ...parsePositionClassName(),
      // 'border-2 bg-green-300 border-green-600',
      'border-transparent',
      'bg-transparent',
      position,
      viewTransitionCSS(),
      viewCursorCSS(),
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
        wrapDisplayCSS(),
        wrapPositionCSS(),
        wrapFlexCSS(),
        wrapSizeWidthCSS(),
        wrapSizeHeightCSS(),
        overflow && 'overflow-auto',
        overflowHidden && 'overflow-hidden',
        ...parsePositionFlexClassName(),
        'flex-grow',
        // 'border-2 bg-cyan-300 border-cyan-600',
        // 'border-transparent',
        // 'bg-transparent',
        wrapTransitionCSS(),
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
