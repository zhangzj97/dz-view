<script setup lang="ts" name="PaneMenu">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneMenu" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
