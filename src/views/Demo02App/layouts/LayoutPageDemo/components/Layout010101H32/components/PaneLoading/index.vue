<script setup lang="ts" name="PaneLoading">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneH32" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
