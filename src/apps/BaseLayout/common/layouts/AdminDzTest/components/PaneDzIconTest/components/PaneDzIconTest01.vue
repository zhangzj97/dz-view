<script setup lang="ts">
const testState = reactive({
  tooltip: '标准示例',
  triggerIcon: 'mdi:dice-1',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>
</template>
