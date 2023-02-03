<script setup lang="ts">
defineProps<{
  overlayClassName?: string;
  placement?: any;
}>();
</script>

<template>
  <a-popover :overlay-class-name="overlayClassName" :placement="placement">
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </a-popover>
</template>
