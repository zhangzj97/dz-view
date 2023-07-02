<script setup lang="ts">
interface DzBaseProps {
  s?: string;
  w?: string;
  t?: string;
  hover?: string;
}

interface DzEntityProps {
  id: string;
  icon: string;
  avatar: string;
  title: string;
}

interface DzViewCursorProps {
  pointer: boolean;
}

interface DzViewFlexProps {
  row?: boolean;
  col?: boolean;

  grid?: boolean;
}

interface DzViewPositionProps {
  absolute?: string;
  fixed?: string;
}

interface DzViewSpaceProps {
  space?: boolean;
}

interface DzViewTestProps {
  desc?: string;
}

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

  // Space
  space?: boolean;

  // Test and demo
  desc?: string;
}>();
</script>

<template>
  <div
    class="dz-view-v202301 dz-view"
    :class="[
      col ? 'dz-view-col' : 'dz-view-row',
      s,
      w,
      hover,
      absolute ? 'absolute top-0 left-0' : 'relative',
      pointer && 'cursor-pointer',
      space && 'dz-view--space',
    ]"
  >
    <slot>
      <div
        v-if="desc"
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
          {{ desc }}
        </div>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.dz-view-v202301.dz-view {
  @apply flex shrink-0 select-none;
  flex-grow: 0;

  &.dz-view-row {
    @apply flex-row items-center;

    & > .w-grow {
      @apply w-0;
      flex-grow: 1;
    }
    & > .h-grow {
      align-self: stretch;
      height: auto;
    }
  }
  &.dz-view-col {
    @apply flex-col items-center;

    & > .w-grow {
      align-self: stretch;
      width: auto;
    }
    & > .h-grow {
      @apply h-0;
      flex-grow: 1;
    }
  }

  &.dz-view--space {
    @apply opacity-0;
  }
}
.dz-view-v202301.dz-view::-webkit-scrollbar {
  @apply w-0 h-0;
}
</style>
