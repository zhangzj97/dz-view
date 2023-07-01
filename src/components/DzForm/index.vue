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
  // col?: boolean;

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
    <v s="w-grow h-fit">
      <v s="w-16 h-fit">
        <dz-text text="label" />
      </v>
      <v s="w-grow h-fit">
        <slot>
          <v s="w-grow h-16" class="bg-red-300"></v>
        </slot>
      </v>
    </v>
  </v>
</template>

<style scoped lang="scss"></style>
