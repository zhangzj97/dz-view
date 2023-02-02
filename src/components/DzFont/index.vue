<script setup lang="ts">
const props = defineProps<{
  xs?: boolean;
  sm?: boolean;
  base?: boolean;
  lg?: boolean;
  xl?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  size?: string;

  bold?: boolean;

  color?: string;

  pointer?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      //
      'flex',
      'relative',
      xs && 'text-xs',
      sm && 'text-sm',
      base && 'text-base',
      lg && 'text-lg',
      xl && 'text-xl',

      left && 'text-left',
      right && 'text-right',
      center && 'text-center',

      bold && 'font-bold',

      size,
      color,

      pointer && 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </div>
</template>
