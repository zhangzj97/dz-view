<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{ icon: string }>();
</script>

<template>
  <div>
    <Icon class="w-full h-full" :icon="props.icon" />
  </div>
</template>
