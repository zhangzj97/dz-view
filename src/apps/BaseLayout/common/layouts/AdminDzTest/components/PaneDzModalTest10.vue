<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: '!!!',
  triggerIcon: 'mdi:clock',
  title: '!!!',
  icon: 'mdi:file-cad-box',
});
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
  />
</template>
