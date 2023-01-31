<script setup lang="ts">
import { layoutData } from './layouts/index';

const layoutState = reactive({ data: layoutData });
</script>

<template>
  <dz-data-layout :layout-data="layoutState.data" />
</template>
