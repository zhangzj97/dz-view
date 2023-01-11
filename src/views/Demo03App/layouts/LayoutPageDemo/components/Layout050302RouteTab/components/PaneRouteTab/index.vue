<script setup lang="ts" name="PaneRouteTab">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneRouteTab" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
