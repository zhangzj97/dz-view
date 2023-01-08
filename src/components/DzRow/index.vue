<script setup lang="ts" name="DzRow">
defineProps<{
  w?: string;
  h?: string;
  rowItem?: boolean;
  hFit?: boolean;
  wAuto?: boolean;
  wFit?: boolean;
}>();
</script>

<template>
  <div class="relative flex transition-all transform" :class="['flex-row']">
    <dz-row-item :class="[hFit ? 'h-fit' : 'h-auto', wAuto ? 'w-fit' : 'w-0 w-grow']" v-if="rowItem"><slot></slot></dz-row-item>
    <slot v-else></slot>
  </div>
</template>
