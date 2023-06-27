<script setup lang="ts">
defineProps<{
  separator?: string;
  baseList?: any[];
}>();
</script>

<template>
  <a-breadcrumb>
    <template #separator>
      <slot name="separator">{{ separator }}</slot>
    </template>

    <a-breadcrumb-item v-for="(item, index) of baseList" :key="index">
      {{ item.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
