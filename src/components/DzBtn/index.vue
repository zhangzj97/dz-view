<script setup lang="ts">
import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';

defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;

  // source
  src?: string;
  // icon 降级选项
  icon?: string;

  // Text
  text?: string;
  title?: string;

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

  // Arco
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text';
  status?: 'normal' | 'warning' | 'success' | 'danger';

  // state
  state?: any;
}>();
</script>

<template>
  <Button
    :type="type"
    shape="square"
    :status="status"
    size="medium"
    :long="false"
    :loading="state?.loading"
    :disabled="state?.disabled"
  >
    <template #icon>
      <slot name="icon">
        <dz-icon s="w-4 h-4" :icon="icon" class="scale-100 translate-y-[2px]" />
      </slot>
    </template>
    <slot>
      <dz-text :text="title" />
    </slot>
  </Button>
</template>
