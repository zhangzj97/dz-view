<script setup lang="ts">
defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;

  // Text
  text?: string;

  // Flex Css
  // row?: boolean;
  col?: boolean;

  // Hover Css
  hover?: string;

  // Position Css
  // absolute?: boolean;

  // Cursor Css
  pointer?: boolean;

  // Test and demo
  desc?: string;

  // schema
  schema?: any;
  config?: any;
  data?: any;
}>();
</script>

<template>
  <v :s="s" :w="w" :col="col">
    <dz-form-item s="w-96 h-fit" />
    <dz-form-item s="w-96 h-fit" />
  </v>
</template>

<style scoped lang="scss"></style>
