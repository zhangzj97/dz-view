<script setup lang="ts" name="PaneBack">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneBack" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
