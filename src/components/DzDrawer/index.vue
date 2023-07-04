<script setup lang="ts" name="view">
import { Drawer } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/drawer/style/css';

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

const props = withDefaults(
  defineProps<DzBaseProps & DzEntityProps & DzViewFlexProps & DzDrawerProps>(),
  { cache: false }
);

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
    class="dz-drawer v202301"
    :class="[`dz-drawer-${position}`]"
    :visible="state.visible"
    :fullscreen="state.fullscreen"
    :defaultVisible="state.visible"
    :placement="position"
    width="auto"
    height="auto"
    :mask="true"
    titleAlign="start"
    :unmountOnClose="cache"
    :maskClosable="true"
    :closable="false"
    :header="false"
    :footer="false"
    :escToClose="true"
  >
    <template #title> </template>
    <v s="w-grow h-grow" col>
      <v s="w-grow h-fit">
        <v-space :s="icon ? 'w-2 h-grow' : 'w-4 h-grow'" />
        <v v-if="icon" s="w-10 h-grow">
          <v-icon v="10-50" :icon="icon" />
        </v>
        <v-text s="w-fit h-grow" :t="t" :text="title" />
        <v-space s="w-grow h-grow" />
        <v
          s="w-10 h-grow"
          trans="hover:bg-gray-100"
          pointer
          @click="toogleFullscreen"
        >
          <v-icon
            v="10-50"
            :icon="!state.fullscreen ? 'mdi:fullscreen' : 'mdi:fullscreen-exit'"
          />
        </v>
        <v s="w-8 h-grow" trans="hover:bg-gray-100" pointer @click="close">
          <v-icon v="8-50" icon="mdi:close" />
        </v>
      </v>
      <v s="w-fit h-fit">
        <slot></slot>
      </v>
      <v-space s="w-grow h-grow" />
      <slot name="footer">
        <v-space s="w-grow h-2" />
        <v s="w-grow h-fit" w="gap-2">
          <v-space s="w-grow h-grow" />
          <slot name="action">
            <v
              s="w-fit h-8"
              class="bg-gray-50"
              trans="hover:bg-gray-100 active:bg-gray-200"
              pointer
              @click="close"
            >
              <v-icon s="w-4 h-4" icon="mdi:close" />
              <v-text text="取消" />
              <v-space s="w-4 h-grow" />
            </v>
          </slot>
          <v-space s="w-0 h-grow" />
        </v>
        <v-space s="w-grow h-2" />
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

      > .dz-view {
        flex-grow: 1;
      }
    }
  }
}
</style>
