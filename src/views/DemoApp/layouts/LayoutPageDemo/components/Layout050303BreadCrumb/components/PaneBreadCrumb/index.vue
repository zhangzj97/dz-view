<script setup lang="ts" name="PaneBreadCrumb">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();
</script>

<template>
  <dz-flex testTitle="PaneBreadCrumb" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
