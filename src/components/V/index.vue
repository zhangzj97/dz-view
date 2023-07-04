<script setup lang="ts">
interface DzBaseProps {
  s?: string;
  w?: string;
  t?: string;
  trans?: boolean | string;
}

interface DzViewTextProps {
  text?: string;
}

interface DzEntityProps {
  id?: string;
  icon?: string;
  avatar?: string;
  title?: string;
  bg?: string;
}

interface DzViewFlexProps {
  row?: boolean;
  col?: boolean;

  grid?: boolean;
}

interface DzViewPositionProps {
  absolute?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br'
    | string;
  fixed?: string;
}

interface DzViewCursorProps {
  pointer?: boolean;
}

interface DzViewSpaceProps {
  space?: boolean;
}

interface DzViewMouseProps {
  v?: 'mouse-gray';
}

withDefaults(
  defineProps<
    DzBaseProps &
      DzViewFlexProps &
      DzViewPositionProps &
      DzViewCursorProps &
      DzViewSpaceProps &
      DzViewTextProps &
      DzViewMouseProps
  >(),
  {
    s: 'w-grow h-grow',
  }
);
</script>

<template>
  <div
    class="dz-view v202301"
    :class="[
      s,
      w,
      t,
      trans,
      trans ? 'dz-view-transition' : '',
      col ? 'dz-view-col' : 'dz-view-row',
      grid ? 'dz-view-grid' : '',
      absolute && `dz-view-absolute-${absolute}`,
      pointer && 'dz-view-pointer',
      v && `v-view-${v}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
<style scoped lang="scss">
@import url(../../assets/styles/dz-view-mouse.scss);
</style>
