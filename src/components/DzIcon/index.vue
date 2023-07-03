<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface DzBaseProps {
  s?: string;
  w?: string;
  t?: string;
  trans?: string;
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

interface DzIconProps {
  icon?: string;
}

defineProps<
  DzBaseProps &
    DzViewFlexProps &
    DzViewPositionProps &
    DzViewCursorProps &
    DzIconProps
>();
</script>

<template>
  <div
    class="dz-icon dz-view v202301"
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
    ]"
  >
    <Icon v-if="icon" class="w-grow h-grow dz-view" :icon="icon" :class="[t]" />
  </div>
</template>

<style scoped lang="scss">
.dz-view.v202301 {
  position: relative;
  display: flex;
  // width: auto;
  // height: auto;
  // padding: 0px;
  // margin: 0px;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: nowrap;
  cursor: auto;
  user-select: none;

  & > .dz-view-row {
    flex-direction: row;
    align-items: center;
  }
  & > .dz-view-col {
    flex-direction: column;
    align-items: center;
  }

  &.dz-view-col {
    flex-direction: column;

    & > .w-grow {
      width: auto;
      align-self: stretch;
    }
    & > .h-grow {
      height: 0px;
      flex-grow: 1;
    }
  }
  &.dz-view-row {
    flex-direction: row;

    & > .w-grow {
      width: 0px;
      flex-grow: 1;
    }
    & > .h-grow {
      height: auto;
      align-self: stretch;
    }
  }
  &.dz-view-grid {
    flex-wrap: wrap;
  }
  &.dz-view-pointer {
    cursor: pointer;
  }

  &.dz-view-transition {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}
</style>
