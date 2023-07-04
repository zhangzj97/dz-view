<script setup lang="ts">
const testState = reactive({
  tooltip: 'group变色',
  triggerIcon: 'mdi:dice-1',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" col class="group">
      <v-icon
        v="12-50"
        trans="group-hover:text-red-500"
        :icon="testState.triggerIcon"
      />
      <v-icon
        v="4-50"
        trans="group-hover:text-red-500"
        :icon="testState.triggerIcon"
      />
    </v>
  </dz-popover>
</template>
