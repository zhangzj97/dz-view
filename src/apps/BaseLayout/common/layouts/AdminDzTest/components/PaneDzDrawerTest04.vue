<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: '过渡Bottom',
  triggerIcon: 'mdi:border-right-variant',
  modalTitle: '过渡Bottom',
  modalIcon: 'mdi:file-cad-box',
});

const { counter } = useInterval(200, { controls: true });
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>

  <dz-drawer
    :state="state"
    position="bottom"
    :title="testState.modalTitle"
    :icon="testState.modalIcon"
  >
    <v
      s="w-fit h-fit"
      class="bg-stripes-sky"
      :style="{
        width: `${(counter * 12) % 200}vw`,
        height: `${(counter * 12) % 200}vh`,
      }"
      trans
    >
    </v>
  </dz-drawer>
</template>
