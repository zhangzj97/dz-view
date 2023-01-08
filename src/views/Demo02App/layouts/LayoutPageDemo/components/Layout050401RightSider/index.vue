<script setup lang="ts" name="Layout050401RightSider">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="Layout050401RightSider" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
