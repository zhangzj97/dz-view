<script setup lang="ts">
import { Drawer } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/drawer/style/css';

import type { DzPopEmits, DzPopProps, DzPopPayload } from '@/types/dz-view';
const props = withDefaults(defineProps<DzPopProps>(), { payload: () => ({}) });
const emits = defineEmits<DzPopEmits>();

const getPayload = (): DzPopPayload => props.payload;
const setPayload = (payload: DzPopPayload) => emits('update:payload', props.code, payload);
defineExpose({ setPayload, getPayload });

const updateVisible = (visible: boolean) => emits('update:payload', props.code, { visible });

const store = reactive({
  iconClose: 'mdi:close',
  iconFullscreen: 'mdi:fullscreen',
  iconExitFullscreen: 'mdi:fullscreen-exit',
  textCancle: 'Cancle',
  close: () => setPayload({ visible: false, fullscreen: false }),
  toggleFullscreen: () => setPayload({ fullscreen: !getPayload().fullscreen }),
});
</script>

<template>
  <Drawer
    class="dz-drawer v202301"
    :class="[`dz-drawer-${payload.position}`]"
    :visible="payload.visible"
    :fullscreen="payload.fullscreen"
    :defaultVisible="payload.visible"
    :placement="payload.position"
    width="auto"
    height="auto"
    titleAlign="start"
    :unmountOnClose="false"
    :mask="true"
    :maskClosable="true"
    :escToClose="true"
    :closable="false"
    :header="false"
    :footer="false"
    @update:visible="updateVisible"
  >
    <!-- 关于为什么会有 flex-shrink -->
    <!-- 1. max-height max-width 无法放在 body 上面否则 calc(100vh - footerheight - headerheight) -->
    <!-- 2. max-height max-width 放在 .arco-drawer-body 上面, 并且约束 外一层的 flex-shrink 约束垂直方向 -->
    <!-- 3. max-height max-width 放在 .arco-drawer-body 上面, 并且约束 内一层的 flex-shrink 约束水平方向 -->
    <!-- flex-shrink overflow -->
    <v s="w-grow h-grow" w="flex-shrink overflow-auto" col>
      <v s="w-grow h-fit">
        <v-space :s="icon ? 'w-2 h-grow' : 'w-4 h-grow'" />
        <v v-if="icon" s="w-10 h-grow">
          <v-icon v="10-50" :icon="icon" />
        </v>
        <v-text s="w-fit h-fit" :t="t" :text="title" />
        <v-space s="w-grow h-grow" />

        <v s="w-10 h-grow" v="mouse-gray" @click="store.close">
          <v-icon v="10-50" :icon="store.iconClose" />
        </v>
      </v>
      <!-- flex-shrink overflow instead of calc(100vh - footerheight - headerheight) -->
      <v s="w-fit h-fit" w="flex-shrink overflow-auto">
        <slot></slot>
      </v>
      <v-space s="w-grow h-grow" />
      <slot name="footer">
        <!-- slot 顶层 可以使用 margin -->
        <v s="w-grow h-fit" w="gap-2 my-2">
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
      </slot>
    </v>
  </Drawer>
</template>

<style lang="scss">
.dz-drawer.v202301.arco-drawer-container {
  .arco-drawer-mask {
  }
  .arco-drawer {
    .arco-drawer-body {
      @apply p-0 m-0 relative flex flex-row flex-nowrap flex-shrink-0;

      @apply w-auto h-fit;

      @apply flex-grow;

      max-width: 100vw;
      max-height: 100vh;

      & > .dz-view {
        flex-grow: 1;
      }
    }
  }
}
</style>
