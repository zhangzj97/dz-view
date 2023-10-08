<script setup lang="ts">
withDefaults(
  defineProps<{
    payload: any;
    value: any;
  }>(),
  {}
);
</script>

<template>
  <textarea
    :class="[
      'w-grow h-8',
      'dz-plugin-control-input',
      payload.error && 'dz-plugin-control-input--error',
      payload.disabled && 'dz-plugin-control-input--disabled',
      'focus:outline-none',
      'pr-4',
    ]"
    :disabled="payload.disabled"
    :readonly="true"
    :placeholder="payload.placeholder"
    :value="value"
    :row="1"
  ></textarea>
</template>
