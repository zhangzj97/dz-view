<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{
  icon: string;
  size?: string;
}>();

const parseSizeClassName = () => {
  const className = {
    width: props.size?.match(/w-[^\s].*/)?.[0],
    height: props.size?.match(/h-[^\s].*/)?.[0],
  };

  return [className.width, className.height];
};

const parseSizeStyle = () => {
  const sizeWithoutUnit = props.size?.match(/^\d+$/)?.[0] || '';
  const sizeUnit = props.size?.match(/^\d+(px|rem)$/)?.[0] || '';
  const result: any = {};

  if (!sizeUnit && !sizeWithoutUnit) return result;

  const size = sizeUnit || `${Number(sizeWithoutUnit) / 4}rem`;
  result.width = size;
  result.height = size;

  return result;
};
</script>

<template>
  <div :class="[...parseSizeClassName()]" :style="{ ...parseSizeStyle() }">
    <template v-if="!props.icon.match(/:/)">
      <div class="w-full h-full icon-image" :class="[props.icon]"></div>
    </template>
    <template v-else>
      <Icon class="w-full h-full" :icon="props.icon" />
    </template>
  </div>
</template>
