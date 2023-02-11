<script setup lang="ts">
defineProps<{
  label: string;
  tooltip?: string;

  visible?: boolean;
  readonly?: boolean;

  required?: boolean;
}>();

const { t } = useI18n();
</script>

<template>
  <dz-view row size="h-grow" wrapperClass="" position="6">
    <dz-view row v-if="required" size="w-fit h-12" wrapperClass="gap-1" position="5">
      <dz-font color="text-red-500">*</dz-font>
    </dz-view>

    <dz-view row size="w-fit h-12" wrapperClass="gap-1" position="5">
      <dz-font>{{ t(label) }}</dz-font>
    </dz-view>

    <template v-if="tooltip">
      <dz-view one size="w-6 h-6" position="5">
        <dz-popover :tooltip="t(tooltip)">
          <dz-icon size="4" icon="ic:outline-info" />
        </dz-popover>
      </dz-view>
    </template>
  </dz-view>
</template>
