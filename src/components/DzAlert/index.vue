<script setup lang="ts">
import AlertDz from './components/AlertDz/index.vue';
import { useDzAlert } from './hooks/useDzAlert';

const props = defineProps<{
  title?: string;
  message?: string;

  type: 'success' | 'error' | 'warn' | 'info';

  closedable?: boolean;
}>();
const { themeOption } = useDzAlert({ props });
</script>

<template>
  <AlertDz :title="title" :message="message" :themeOption="themeOption">
    <slot></slot>
  </AlertDz>
</template>
