<script setup lang="ts">
import ControlInput from './components/ControlInput.vue';
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
  console.log('check');
};

defineExpose({
  check,
});
</script>

<template>
  <h1>123</h1>
  <!-- <v :s="s ? s : 'w-fit h-fit'" :w="w">
    <v s="w-grow h-grow">
      <v s="w-24 h-grow">
        <v s="w-grow h-grow" space />
        <v s="w-fit h-grow" col>
          <v s="w-fit h-fit">
            <dz-text
              s="w-fit h-8"
              class="-translate-x-1 translate-y-2"
              text="Label"
            />
            <dz-text s="w-fit h-fit" text="*" />
            <dz-icon s="w-8 h-8" class="scale-50" icon="ic:outline-info" />
          </v>
          <v s="w-grow h-grow" space />
        </v>
      </v>
      <v s="w-grow h-fit" col>
        <Component s="w-grow h-fit" :is="ControlInput" />
        <dz-text s="w-fit h-12" t="text-red-500" text="Error" />
      </v>
      <slot></slot>
    </v>
  </v> -->
</template>

<style scoped lang="scss"></style>
