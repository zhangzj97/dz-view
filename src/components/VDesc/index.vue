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
      DzViewTextProps &
      DzViewTestProps
  >(),
  {
    s: 'w-grow h-grow',
  }
);
</script>

<template>
  <div
    class="dz-view dz-view-desc v202301"
    :class="[
      s,
      w,
      t,
      hover,
      col ? 'dz-view-col' : 'dz-view-row',
      grid ? 'dz-view-grid' : '',
      absolute && `dz-view-absolute-${absolute}`,
      pointer && 'dz-view-pointer',
    ]"
  >
    <slot>
      <div
        class="flex items-center justify-center flex-grow overflow-auto h-grow w-grow dz-view scrollbar-hidden"
        :class="[
          [
            'bg-stripes-cyan',
            'bg-stripes-sky',
            'bg-stripes-blue',
            'bg-stripes-purple',
            'bg-stripes-violet',
            'bg-stripes-pink',
          ][Math.floor(Math.random() * 5)],
        ]"
      >
        <div class="flex text-lg italic font-bold text-gray-600">
          {{ text }}
        </div>
      </div>
    </slot>
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
}
</style>
