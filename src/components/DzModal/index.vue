<script setup lang="ts" name="view">
import { Modal } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/modal/style/css';

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
  <Modal
    class="dz-modal-v202301 dz-modal dz-modal-acro"
    :visible="state.visible"
    :fullscreen="state.fullscreen"
    :defaultVisible="state.visible"
    :mask="true"
    titleAlign="start"
    :unmountOnClose="cache"
    :maskClosable="true"
    :closable="false"
    :footer="true"
    :draggable="true"
    :escToClose="true"
  >
    <template #title>
      <v v-if="title" s="w-grow h-10" w="gap-2">
        <v s="w-2 h-10" space />
        <dz-text t="text-base text-black" :text="title" />
        <v s="w-grow h-10" space />
        <v s="w-fit h-10">
          <dz-icon
            s="w-10 h-10"
            class="scale-50"
            hover="hover:bg-gray-100"
            :icon="
              state.fullscreen
                ? 'ic:round-fullscreen-exit'
                : 'ic:round-fullscreen'
            "
            pointer
            @click="toogleFullscreen"
          />

          <dz-icon
            s="w-10 h-10"
            class="scale-50"
            hover="hover:bg-gray-100"
            icon="ic:round-close"
            pointer
            @click="close"
          />
        </v>
      </v>
      <slot v-if="!title" name="header"></slot>
    </template>
    <template #footer>
      <div class="arco-modal-title arco-modal-title-align-start">
        <slot name="footer">
          <v s="w-grow h-10" w="gap-2">
            <v s="w-grow h-10" space />
            <dz-btn text="确定" />
            <dz-btn text="取消" @click="close" />
            <v s="w-2 h-10" space />
          </v>
        </slot>
      </div>
    </template>

    <template #default>
      <v
        :s="
          state.fullscreen
            ? 'w-[calc(100vw-16px)] h-[calc(100vh-40px-40px-2px)]'
            : s
        "
        :w="
          state.fullscreen
            ? 'max-w-[calc(100vw-16px)] max-h-[calc(100vh-40px-40px-2px)] overflw-auto'
            : w
        "
        :col="col"
        class="transition-all"
      >
        <slot></slot>
      </v>
    </template>
  </Modal>
</template>

<style lang="scss">
.dz-modal-v202301.dz-modal.dz-modal-acro {
  .arco-modal {
    @apply w-fit h-fit;
  }
  .arco-modal-title {
    @apply flex shrink-0 select-none;
    @apply flex-row;
    flex-grow: 1; // flex-grow: 0;
  }

  .arco-modal-body > .w-grow,
  .arco-modal-title > .w-grow {
    @apply w-0;
    flex-grow: 1;
  }
  .arco-modal-body {
    @apply w-fit h-fit;
    @apply p-0;
  }

  .arco-modal-header,
  .arco-modal-footer {
    @apply w-full h-fit;
    @apply p-0;
  }
}
</style>
