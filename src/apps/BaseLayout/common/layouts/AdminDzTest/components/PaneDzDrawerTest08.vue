<script setup lang="ts">
import { useDrawer } from '@/hooks/useTrigger';

const { state, setVisible } = useDrawer();

const testState = reactive({
  tooltip: '!!!',
  triggerIcon: 'mdi:clock',
  modalTitle: '!!!',
  modalIcon: 'mdi:file-cad-box',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>

  <dz-drawer
    :state="state"
    position="right"
    :title="testState.modalTitle"
    :icon="testState.modalIcon"
  />
</template>
