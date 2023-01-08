<script setup lang="ts" name="PaneTitle">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneTitle" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
