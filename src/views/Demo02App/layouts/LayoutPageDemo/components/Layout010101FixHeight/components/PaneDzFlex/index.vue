<script setup lang="ts" name="PaneDzFlex">
import { useLayoutStyle } from '@/views/DemoApp/hooks/useLayoutStyle';
const { layoutStyleStyle, clickToggle } = useLayoutStyle();

defineProps<{
  testTitle?: string;
}>();
</script>

<template>
  <dz-flex :testTitle="testTitle" v-show="layoutStyleStyle.visible" @click="clickToggle" />
</template>
