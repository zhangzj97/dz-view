<script setup lang="ts" name="PaneAvatar">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneAvatar" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
