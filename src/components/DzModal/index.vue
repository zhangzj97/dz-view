<script setup lang="ts" name="view">
defineOptions({ name: 'DzModal' });

import { Modal } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/modal/style/css';

import type { DzModalComponentProps, DzViewStateProps } from '@/types/dz-view';
interface Props {
  state: DzViewStateProps;
  position?: 'top' | 'bottom' | 'left' | 'right';
}
const props = withDefaults(defineProps<DzModalComponentProps & Props>(), {});

const emit = defineEmits<{
  'update:state': [value: DzViewStateProps];
}>();

const { setState, getState } = useComponentState({ props, emit });
defineExpose({ setState, getState });

const store = reactive({
  iconClose: 'mdi:close',
  iconFullscreen: 'mdi:fullscreen',
  iconExitFullscreen: 'mdi:exit-fullscreen-exit',
  textCancle: 'Cancle',

  close: () => setState({ visible: false, fullscreen: false }),
  toggleFullscreen: () => setState({ fullscreen: !getState().fullscreen }),
});
</script>

<template>
  <Modal
    class="dz-modal v202301"
    :visible="state.visible"
    :fullscreen="state.fullscreen"
    :defaultVisible="state.visible"
    :mask="true"
    titleAlign="start"
    :unmountOnClose="true"
    :maskClosable="true"
    :closable="false"
    :header="false"
    :footer="false"
    :draggable="true"
    :escToClose="true"
  >
    <template #title>
      <v s="w-grow h-fit">
        <v-space :s="icon ? 'w-2 h-grow' : 'w-4 h-grow'" />
        <v v-if="icon" s="w-10 h-grow">
          <v-icon v="10-50" :icon="icon" />
        </v>
        <v-text s="w-fit h-grow" :t="t" :text="title" />
        <v-space s="w-grow h-grow" />
        <v s="w-10 h-grow" v="mouse-gray" @click="store.toggleFullscreen">
          <v-icon
            v="10-50"
            :icon="
              !state.fullscreen
                ? store.iconFullscreen
                : store.iconExitFullscreen
            "
          />
        </v>
        <v s="w-10 h-grow" v="mouse-gray" @click="store.close">
          <v-icon v="10-50" :icon="store.iconClose" />
        </v>
      </v>
    </template>
    <!-- 关于为什么会有 flex-shrink -->
    <!-- 1. max-height max-width 无法放在 body 上面否则 calc(100vh - footerheight - headerheight) -->
    <!-- 2. max-height max-width 放在 .arco-modal-body 上面, 并且约束 内一层的 flex-shrink 约束垂直方向 -->
    <!-- 3. max-height max-width 放在 .arco-modal-body 上面, 并且约束 内一层的 max-w-[100vw] 约束水平方向 -->
    <!-- flex-shrink overflow -->
    <v s="w-grow h-grow" col>
      <v s="w-fit h-fit" w="flex-shrink max-w-[100vw] overflow-auto">
        <slot></slot>
      </v>
      <v-space s="w-grow h-grow" />
      <slot name="footer">
        <v-space s="w-grow h-2" />
        <v s="w-grow h-fit" w="gap-2">
          <v-space s="w-grow h-grow" />
          <slot name="action">
            <v s="w-fit h-8" v="mouse-gray" @click="store.close">
              <v-icon v="8-50" :icon="store.iconClose" />
              <v-text :text="store.textCancle" />
              <v-space s="w-4 h-grow" />
            </v>
          </slot>
          <v-space s="w-0 h-grow" />
        </v>
        <v-space s="w-grow h-2" />
      </slot>
    </v>
  </Modal>
</template>

<style lang="scss">
.dz-modal.v202301.arco-modal-container {
  & > .arco-modal-mask {
  }

  & > .arco-modal-wrapper {
    & > .arco-modal {
      overflow: hidden;

      width: auto;
      height: fit-content;

      & > .arco-modal-header {
        @apply p-0 m-0 relative flex flex-row flex-nowrap flex-shrink-0;
        @apply flex-grow;

        @apply w-auto h-auto;

        & > .arco-modal-title {
          @apply p-0 m-0 relative flex flex-row flex-nowrap flex-shrink-0;

          @apply w-auto h-auto;

          @apply flex-grow;

          font-size: 14px;

          & > .dz-view {
            flex-grow: 1;
          }
        }
      }

      & > .arco-modal-body {
        @apply p-0 m-0 relative flex flex-row flex-nowrap;

        @apply w-auto h-auto;

        @apply flex-grow flex-shrink;

        overflow: auto;

        max-width: calc(100vw);
        max-height: calc(100vh - 42px);

        & > .dz-view {
          flex-grow: 1;
        }
      }
    }
  }

  &
    > .arco-modal-wrapper
    > .arco-modal.arco-modal-fullscreen
    > .arco-modal-body {
    width: calc(100vw);
    height: calc(100vh - 42px);
  }
}
</style>
