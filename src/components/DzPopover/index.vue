<script setup lang="ts" name="view">
import { Popover, Tooltip } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/popover/style/css';
import '@arco-design/web-vue/es/tooltip/style/css';

const props = defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;

  // Text
  text?: string;
  title?: string;
  icon?: string;

  // Flex Css
  // row?: boolean;
  col?: boolean;

  // state
  state: any;

  // cache
  cache?: boolean;

  // trigger
  tooltip?: string;
  trigger?: 'hover' | 'click' | 'focus' | 'contextMenu';

  // position
  placement?: 'top' | 'bottom' | 'left' | 'right' | undefined;
}>();

const emit = defineEmits<{
  (e: 'update:state', value: any): void;
}>();

const close = () => {
  const state = props.state;
  state.visible = false;
  state.fullscreen = false;
  emit('update:state', state);
};
const toogleFullscreen = () => {
  const state = props.state;
  state.fullscreen = !state.fullscreen;
  emit('update:state', state);
};
</script>

<template>
  <Tooltip
    v-if="tooltip"
    class="dz-tooltip-v202301 dz-tooltip dz-tooltip-acro"
    :content="tooltip"
  >
    <slot></slot>
  </Tooltip>
  <Popover
    v-if="!tooltip"
    class="dz-popover-v202301 dz-popover dz-popover-acro"
    :trigger="trigger"
  >
    <slot></slot>

    <template #content>
      <slot name="content"></slot>
    </template>
  </Popover>
</template>

<style lang="scss">
.dz-popover-v202301.dz-popover.dz-popover-acro {
  .arco-popover-popup-content {
    @apply p-0;
    @apply w-fit h-fit;
  }
}
</style>
