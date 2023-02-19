<script setup lang="ts">
import { layoutData } from './layouts/index';
import { useSourceMenuStore } from '@/hooks/useSourceStore';

const initMenu = () => {
  const { initSourceImportRaw: initMenu } = useSourceMenuStore();
  initMenu();
};

onBeforeMount(() => {
  initMenu();
});

const layoutState = reactive({ data: layoutData });
</script>

<template>
  <dz-data-layout :layout-data="layoutState.data">
    <slot></slot>
  </dz-data-layout>
</template>
