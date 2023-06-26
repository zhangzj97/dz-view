<script setup lang="ts">
import BreadCrumbAntd from './components/BreadCrumbAntd/index.vue';

defineProps<{
  separator: string;
  routeList: any[];
}>();
</script>

<template>
  <BreadCrumbAntd :separator="separator" :base-list="routeList">
    <template #separator>
      <slot name="separator"></slot>
    </template>
  </BreadCrumbAntd>
</template>
