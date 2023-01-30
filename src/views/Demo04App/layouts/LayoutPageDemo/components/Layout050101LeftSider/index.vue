<script setup lang="ts" name="Layout050101LeftSider">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="Layout050101LeftSider" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
