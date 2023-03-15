<script setup lang="ts">
import ButtonPrimary from './components/ButtonPrimary/index.vue';
import ButtonDanger from './components/ButtonDanger/index.vue';
import ButtonText from './components/ButtonText/index.vue';
import ButtonLink from './components/ButtonLink/index.vue';
import ButtonDefault from './components/ButtonDefault/index.vue';

defineProps<{
  title?: string | false;

  icon?: string | false;

  loading?: boolean;
  disable?: boolean;

  primary?: boolean;
  danger?: boolean;
  text?: boolean;
  link?: boolean;

  size?: string;
}>();
</script>

<template>
  <ButtonPrimary
    v-if="primary"
    :title="title"
    :icon="icon"
    :loading="loading"
    :disable="disable"
  />
  <ButtonDanger
    v-else-if="danger"
    :title="title"
    :icon="icon"
    :loading="loading"
    :disable="disable"
  />
  <ButtonText
    v-else-if="text"
    :size="size || 'w-fit h-fit'"
    :title="title"
    :icon="icon"
    :loading="loading"
    :disable="disable"
  />
  <ButtonLink
    v-else-if="link"
    :title="title"
    :icon="icon"
    :loading="loading"
    :disable="disable"
  />
  <ButtonDefault
    v-else
    :title="title"
    :icon="icon"
    :loading="loading"
    :disable="disable"
  />
</template>
