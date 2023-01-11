<script setup lang="ts" name="PaneLoading">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneLoading" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
