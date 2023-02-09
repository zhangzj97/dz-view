<script setup lang="ts">
defineProps<{
  title?: string;
  visible?: boolean;
  tooltip?: string;
}>();
</script>

<template>
  <dz-view row size="h-grow" wrapperClass="" position="6">
    <dz-view row size="w-fit h-12" wrapperClass="gap-1" position="5">
      <dz-font color="text-red-500">*</dz-font>
      <dz-font>{{ title }}</dz-font>
    </dz-view>

    <template v-if="tooltip">
      <dz-view one size="w-6 h-6" position="5">
        <dz-popover :tooltip="tooltip">
          <dz-icon size="4" icon="ic:outline-info" />
        </dz-popover>
      </dz-view>
    </template>

    <dz-view one size="w-2" position="5"> </dz-view>
  </dz-view>
</template>
