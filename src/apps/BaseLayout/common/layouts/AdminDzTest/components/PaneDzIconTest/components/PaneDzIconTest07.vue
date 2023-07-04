<script setup lang="ts">
const testState = reactive({
  tooltip: 'group显示',
  triggerIcon: 'mdi:dice-1',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" class="group" col>
      <v-icon v="12-50" :icon="testState.triggerIcon" />
      <v-icon
        v="4-50"
        class="opacity-0"
        trans="group-hover:opacity-100"
        :icon="testState.triggerIcon"
      />
    </v>
  </dz-popover>
</template>
