<script setup lang="ts" name="view">
import { Drawer } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/drawer/style/css';

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

  // position
  position: 'top' | 'bottom' | 'left' | 'right' | undefined;
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
  <Drawer
    class="dz-drawer-v202301 dz-drawer dz-drawer-acro"
    :class="[`dz-drawer-acro-${position}`]"
    :visible="state.visible"
    :fullscreen="state.fullscreen"
    :defaultVisible="state.visible"
    :placement="position"
    :mask="true"
    titleAlign="start"
    :unmountOnClose="cache"
    :maskClosable="true"
    :closable="false"
    :header="true"
    :footer="true"
    :escToClose="true"
  >
    <template #title>
      <v v-if="title" s="w-grow h-10" w="gap-2">
        <v s="w-2 h-10" space />
        <dz-text t="text-base text-black" :text="title" />
        <v s="w-grow h-10" space />
        <v s="w-fit h-10">
          <dz-icon
            v-if="false"
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
        :s="state.fullscreen ? s : s"
        :w="state.fullscreen ? w : w"
        :col="col"
        class="transition-all"
      >
        <slot></slot>
      </v>
    </template>
  </Drawer>
</template>

<style lang="scss">
.dz-drawer-v202301.dz-drawer.dz-drawer-acro {
  .arco-drawer {
    // @apply w-fit h-full;
  }
  .arco-drawer-title {
    @apply flex shrink-0 select-none;
    @apply flex-row;
    flex-grow: 1; // flex-grow: 0;
  }

  .arco-drawer-body > .w-grow,
  .arco-drawer-title > .w-grow {
    @apply w-0;
    flex-grow: 1;
  }
  .arco-drawer-body {
    // @apply w-fit h-fit;
    @apply p-0;
  }

  .arco-drawer-header,
  .arco-drawer-footer {
    @apply w-full h-fit;
    @apply p-0;
  }
}

.dz-drawer-acro-right,
.dz-drawer-acro-left {
  .arco-drawer {
    width: fit-content !important;
  }
}

.dz-drawer-acro-top,
.dz-drawer-acro-bottom {
  .arco-drawer {
    height: fit-content !important;
  }
}
</style>
