<script setup lang="ts" name="DzView">
const props = defineProps<{
  layout: 'one' | 'row' | 'col' | 'grid';
  grow: number | boolean | string;
  size: string;
}>();

const parseSizeClassName = () => {
  const className = {
    width: props.size.match(/w-[^\s].*/)?.[0] || '',
    height: props.size.match(/h-[^\s].*/)?.[0] || '',
  };

  return [className.width, className.height];
};

const parseLayoutClassName = () => {
  const className = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'flex-row',
    flexWrap: 'flex-nowrap',
  };

  props.layout === 'one' && (className.flexDirection = 'flex-row');
  props.layout === 'row' && (className.flexDirection = 'flex-row');
  props.layout === 'col' && (className.flexDirection = 'flex-col');
  props.layout === 'grid' && (className.flexDirection = 'flex-row');

  props.layout === 'one' && (className.flexWrap = 'flex-nowrap');
  props.layout === 'row' && (className.flexWrap = 'flex-nowrap');
  props.layout === 'col' && (className.flexWrap = 'flex-nowrap');
  props.layout === 'grid' && (className.flexWrap = 'flex-wrap');

  return [className.display, className.position, className.flexDirection, className.flexWrap];
};
</script>

<template>
  <div
    :class="[
      //
      ...parseSizeClassName(),
      ...parseLayoutClassName(),
      'border-2 border-green-600',
    ]"
    :style="{
      flexGrow: Number(grow),
    }"
  >
    <dz-wrapper v-if="layout === 'one'" layout="col" :grow="1" size="w-0 h-full">
      <slot></slot>
    </dz-wrapper>
    <dz-wrapper v-if="layout === 'col'" layout="col" :grow="0" size="w-auto h-full">
      <slot></slot>
    </dz-wrapper>
    <slot v-if="layout === 'row'"></slot>
  </div>
</template>
