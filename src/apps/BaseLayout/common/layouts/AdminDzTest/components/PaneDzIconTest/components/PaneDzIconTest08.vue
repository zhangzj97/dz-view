<script setup lang="ts">
const testState = reactive({
  tooltip: '!!!',
  triggerIcon: 'mdi:clock',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>
</template>
