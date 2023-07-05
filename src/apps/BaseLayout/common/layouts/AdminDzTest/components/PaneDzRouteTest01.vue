<script setup lang="ts">
import { useService } from '@/hooks/useService';

const { getState } = useService();

const { menuState } = getState('Dz/Route');

const test = () => {
  menuState.levelTopMode = !menuState.levelTopMode;
};

const testState = reactive({
  tooltip: '顶级menu',
  triggerIcon: 'mdi:menu',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="test">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>
</template>
