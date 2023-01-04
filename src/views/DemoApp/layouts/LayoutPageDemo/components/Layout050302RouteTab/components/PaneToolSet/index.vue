<script setup lang="ts" name="PaneToolSet">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneToolSet" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
