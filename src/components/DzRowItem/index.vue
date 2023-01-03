<script setup lang="ts" name="DzRowItem">
defineProps<{
  w?: string;
  h?: string;
}>();
</script>

<template>
  <div class="relative flex transition-all transform" :class="['flex-col']">
    <slot></slot>
  </div>
</template>
