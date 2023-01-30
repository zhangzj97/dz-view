<script setup lang="ts" name="PaneFooter">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneFooter" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
