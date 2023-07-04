<script setup lang="ts">
const testState = reactive({
  tooltip: '闪烁-需要一层动画层',
  triggerIcon: 'mdi:dice-1',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray">
      <v s="w-grow h-grow" trans="animate-pulse">
        <v-icon v="16-50" :icon="testState.triggerIcon" />
      </v>
    </v>
  </dz-popover>
</template>
