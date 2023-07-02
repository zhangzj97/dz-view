<script setup lang="ts">
import { reactive } from 'vue';

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

const check = () => {
  if (!state.value) {
    validator.isError = true;
  } else {
    validator.isError = false;
  }
};

defineExpose({
  check,
});

const validator = reactive({
  value: '',

  isError: true,
  msg: 'error',

  //
  error: [],
});

const state = reactive({
  value: '',
});
</script>

<template>
  <v :class="[s, w]" class="bg-red-100">
    <dz-popover trigger="click">
      <dz-btn title="popover" />
      <template #content>
        <input v-model="state.value" />
      </template>
    </dz-popover>
    <dz-text :text="state.value" />
    <dz-btn title="check" @click="check" />
    {{ validator.isError }}
  </v>
</template>

<style>
input.w-grow {
  width: 100%;
}
</style>
