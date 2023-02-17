<script setup lang="ts">
import AlertDz from './components/AlertDz/index.vue';
import { useTheme } from '@/hooks/useTheme';

const props = defineProps<{
  title?: string;
  message?: string;

  closedable?: boolean;

  primary?: boolean;
  info?: boolean;
  danger?: boolean;
  warn?: boolean;
  theme?: string | false;

  bg?: string;
  border?: string;

  icon?: string | false;
}>();
const config: any = inject('config');
const { themeOption, icon } = useTheme({ props, config, themePart: 'DzAlertOption' });
console.log({ themeOption, icon });
</script>

<template>
  <AlertDz :title="title" :message="message" :themeOption="themeOption" :icon="icon">
    <slot></slot>
  </AlertDz>
</template>
