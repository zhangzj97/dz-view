<script setup lang="ts" name="PaneCopyright">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneCopyright" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
