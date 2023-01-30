<script setup lang="ts" name="DataLayout">
import DataLayout from './components/DataLayout/index.vue';
defineProps<{ layoutData: any }>();
</script>

<template>
  <data-layout :layout-data="layoutData" />
</template>
