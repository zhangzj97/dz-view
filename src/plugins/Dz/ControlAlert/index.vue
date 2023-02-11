<script setup lang="ts">
defineProps<{
  value: any;

  dataModel: any;

  placeholder: string;
  tooltip: string;
  rule: any;
  readonly: boolean;
  required: boolean;
  visible: boolean;
  field: string;
  labelField: string;
}>();
</script>

<template>
  <dz-view row size="h-grow" position="5">
    <dz-view one size="w-grow">
      <dz-font>{{ placeholder }}</dz-font>
    </dz-view>

    <dz-view row size="w-fit" wrapper-class="gap-2 px-2">
      <dz-icon size="4" icon="ic:sharp-devices-fold"></dz-icon>
      <dz-icon size="4" icon="ic:sharp-devices-fold"></dz-icon>
      <dz-icon size="4" icon="ic:sharp-devices-fold"></dz-icon>
    </dz-view>
  </dz-view>
</template>
