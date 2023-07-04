<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: '全屏 为了规避bug 最好设定 max-h max-w',
  triggerIcon: 'mdi:dock-window',
  title: '全屏 为了规避bug 最好设定 max-h max-w',
  icon: 'mdi:file-cad-box',
});

const { counter } = useInterval(200, { controls: true });
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>

  <dz-modal
    :state="state"
    position="right"
    :title="testState.title"
    :icon="testState.icon"
  >
    <v
      s="w-fit h-fit"
      :w="state.fullscreen ? '' : 'max-w-[80vw] max-h-[80vh]'"
      class="bg-stripes-sky"
      :style="{
        width: `${(counter * 12) % 200}vw`,
        height: `${(counter * 12) % 200}vh`,
      }"
      trans
    ></v>
  </dz-modal>
</template>
