<script setup lang="ts">
defineOptions({ name: 'DzPopover' });

import { Popconfirm, Popover, Tooltip } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/popover/style/css';
import '@arco-design/web-vue/es/tooltip/style/css';
import '@arco-design/web-vue/es/popconfirm/style/css';

import type { DzPopoverComponentProps, DzViewStateProps } from '@/types/dz-view';
interface Props {
  code?: string;
  state?: DzViewStateProps;
  position?: 'top' | 'bottom' | 'left' | 'right';
  tooltip?: string;
  confirm?: string;
  trigger?: 'hover' | 'click' | 'focus' | 'contextMenu';
}
const props = withDefaults(defineProps<DzPopoverComponentProps & Props>(), {});

const emit = defineEmits<{
  'update:state': [state: DzViewStateProps, code?: string];
}>();

const { setState, getState } = useComponentState({ props, emit });
defineExpose({ setState, getState });

const updateVisible = (visible: boolean) => {
  emit('update:state', { visible }, props.code);
};
</script>

<template>
  <Tooltip
    v-if="tooltip"
    class="dz-tooltip v202301"
    :content="tooltip"
    :popupVisible="state?.visible"
    @update:popupVisible="updateVisible"
  >
    <slot></slot>
  </Tooltip>
  <Popconfirm
    v-else-if="confirm"
    class="dz-popconfirm v202301"
    :content="confirm"
    :popupVisible="state?.visible"
    @update:popupVisible="updateVisible"
  >
    <slot></slot>
  </Popconfirm>
  <Popover
    v-else
    class="dz-popover v202301"
    :trigger="trigger"
    :popupVisible="state?.visible"
    @update:popupVisible="updateVisible"
  >
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
