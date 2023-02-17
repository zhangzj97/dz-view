<script setup lang="ts">
import ButtonDz from './components/ButtonDz/index.vue';
import ButtonText from './components/ButtonText/index.vue';
import ButtonLink from './components/ButtonLink/index.vue';
import { useTheme } from '@/hooks/useTheme';

const props = defineProps<{
  title?: string;

  primary?: boolean;
  info?: boolean;
  danger?: boolean;
  warn?: boolean;
  theme?: string | false;

  icon?: string | false;
  iconSize?: string;

  loading?: boolean;
  disable?: boolean;

  link?: boolean;
  text?: boolean;
}>();

const config: any = inject('config');
const { themeOption } = useTheme({ props, config, themePart: 'DzButtonOption' });
</script>

<template>
  <ButtonLink v-if="link" :title="title" :themeOption="themeOption" :icon="icon" :loading="loading" :disable="disable" />
  <ButtonText v-else-if="text" :title="title" :themeOption="themeOption" :icon="icon" :loading="loading" :disable="disable" />
  <ButtonDz v-else :title="title" :themeOption="themeOption" :icon="icon" :loading="loading" :disable="disable" />
</template>
