<script setup lang="ts" name="DzRow">
defineProps<{
  w?: string;
  h?: string;
  rowItem?: boolean;
}>();
</script>

<template>
  <div class="relative flex transition-all transform" :class="['flex-row']">
    <dz-row-item class="h-grow" v-if="rowItem"><slot></slot></dz-row-item>
    <slot v-else></slot>
  </div>
</template>
