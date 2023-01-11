<script setup lang="ts" name="PaneAppNav">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneAppNav" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
