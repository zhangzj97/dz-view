<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: '96 x 96',
  triggerIcon: 'mdi:border-right-variant',
  modalTitle: '96 x 96',
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
  >
    <v s="w-96 h-96" class="bg-stripes-sky"></v>
  </dz-drawer>
</template>
