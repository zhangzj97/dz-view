<script setup lang="ts">
import { layoutData } from './layout/index';

const layoutState = reactive({ data: layoutData });
</script>

<template>
  <dz-data-layout :layout-data="layoutState.data" />
</template>
