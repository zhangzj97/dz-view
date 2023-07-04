<script setup lang="ts" name="view">
import { Popover, Tooltip } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/popover/style/css';
import '@arco-design/web-vue/es/tooltip/style/css';

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

interface DzPopoverProps {
  state?: any;
  cache?: boolean;
  tooltip?: string;
  trigger?: 'hover' | 'click' | 'focus' | 'contextMenu';
  placement?: 'top' | 'bottom' | 'left' | 'right' | undefined;
}

interface DzModalProps {
  state?: any;
  cache?: boolean;
}

interface DzDrawerProps {
  state?: any;
  cache?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

withDefaults(
  defineProps<DzBaseProps & DzEntityProps & DzViewFlexProps & DzPopoverProps>(),
  { cache: false }
);

const emit = defineEmits<{
  (e: 'update:state', value: any): void;
}>();
</script>

<template>
  <Tooltip v-if="tooltip" class="dz-tooltip v202301" :content="tooltip">
    <slot></slot>
  </Tooltip>
  <Popover v-if="!tooltip" class="dz-popover v202301" :trigger="trigger">
    <slot></slot>

    <template #content>
      <slot name="body"></slot>
    </template>
  </Popover>
</template>

<style lang="scss">
.dz-popover.v202301.arco-popover {
  & > .arco-trigger-popup-wrapper {
    & > .arco-trigger-content {
      @apply p-0 m-0;

      & > .arco-popover-content {
        @apply p-0 m-0 relative flex flex-row;
        @apply w-fit h-fit;
        & > .dz-view {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>
