<script setup lang="ts">
defineOptions({ name: 'DzPopover' });

import { Popconfirm, Popover, Tooltip } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/popover/style/css';
import '@arco-design/web-vue/es/tooltip/style/css';
import '@arco-design/web-vue/es/popconfirm/style/css';

import type { DzPopEmits, DzPopProps, DzPopPayload } from '@/types/dz-view';
const props = withDefaults(defineProps<DzPopProps>(), { payload: () => ({}) });
const emits = defineEmits<DzPopEmits>();

const getPayload = (): DzPopPayload => props.payload;
const setPayload = (payload: DzPopPayload) => emits('update:payload', props.code, payload);
defineExpose({ setPayload, getPayload });

const updateVisible = (visible: boolean) => emits('update:payload', props.code, { visible });
</script>

<template>
  <Tooltip
    v-if="payload.tooltip"
    class="dz-tooltip v202301"
    :content="payload.tooltip"
    :popupVisible="payload.visible"
    @update:popupVisible="updateVisible"
  >
    <slot></slot>
  </Tooltip>
  <Popconfirm
    v-else-if="payload.confirm"
    class="dz-popconfirm v202301"
    :content="payload.confirm"
    :popupVisible="payload.visible"
    @update:popupVisible="updateVisible"
  >
    <slot></slot>
  </Popconfirm>
  <Popover
    v-else
    class="dz-popover v202301"
    :class="[payload.visibleArrow === false ? 'dz-pop-arrow--hidden' : '']"
    :trigger="payload.trigger"
    :popupVisible="payload.visible"
    :clickOutsideToClose="payload.maskClosable"
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
      @apply border-0;

      & > .arco-popover-content {
        @apply p-0 m-0 relative flex flex-row;
        @apply w-fit h-fit;

        & > .dz-view {
          flex-grow: 1;
        }
      }
    }
  }

  &.dz-pop-arrow--hidden {
    & > .arco-trigger-popup-wrapper > .arco-trigger-arrow {
      opacity: 0;
    }
  }
}
</style>
