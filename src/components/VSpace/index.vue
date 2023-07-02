<script setup lang="ts">
interface DzBaseProps {
  s?: string;
  w?: string;
  t?: string;
  hover?: string;
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

interface DzViewTestProps {
  desc?: string;
}

withDefaults(
  defineProps<
    DzBaseProps &
      DzViewFlexProps &
      DzViewPositionProps &
      DzViewCursorProps &
      DzViewSpaceProps &
      DzViewTestProps
  >(),
  {
    s: 'w-grow h-grow',
  }
);
</script>

<template>
  <div
    class="dz-view dz-view-space v202301"
    :class="[
      s,
      w,
      t,
      hover,
      col ? 'dz-view-col' : 'dz-view-row',
      grid ? 'flex-nowrap' : '',
      absolute && `dz-view-absolute-${absolute}`,
      pointer && 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.dz-view.v202301 {
  position: relative;
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: nowrap;
  cursor: auto;
  user-select: none;

  & > .dz-view-row {
    flex-direction: row;
    align-items: center;

    & > .w-grow {
      width: 0px;
      flex-grow: 1;
    }
    & > .h-grow {
      height: auto;
      align-self: stretch;
    }
  }
  & > .dz-view-col {
    flex-direction: column;
    align-items: center;

    & > .w-grow {
      width: auto;
      align-self: stretch;
    }
    & > .h-grow {
      height: 0px;
      flex-grow: 1;
    }
  }
}
</style>
