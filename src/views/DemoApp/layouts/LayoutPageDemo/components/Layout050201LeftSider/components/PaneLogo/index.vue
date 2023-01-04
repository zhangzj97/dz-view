<script setup lang="ts" name="PaneLogo">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneLogo" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
