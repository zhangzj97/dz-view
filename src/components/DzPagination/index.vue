<script setup lang="ts">
import PaginationAntd from './components/PaginationAntd/index.vue';

defineProps<{
  current?: any;
  total?: any;
}>();
</script>

<template>
  <PaginationAntd :current="current" show-quick-jumper :total="total" />
</template>
