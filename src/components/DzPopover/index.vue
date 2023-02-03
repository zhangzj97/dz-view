<script setup lang="ts">
import PopoverAntd from './components/PopoverAntd/index.vue';

const props = defineProps<{
  placement?: any;
  overlayClassName?: string;

  rounded?: boolean;
  sharp?: boolean;
}>();

const parseOverlayClassName = () => {
  const result = ['dz-popover', props.overlayClassName];

  if (props.rounded) result.push('dz-popover-rounded');
  if (props.sharp) result.push('dz-popover-sharp');

  return result.join(' ');
};
</script>

<template>
  <PopoverAntd :overlay-class-name="parseOverlayClassName()" :placement="placement">
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </PopoverAntd>
</template>

<style lang="scss">
.dz-popover.ant-popover {
  @apply bg-transparent;
}

.dz-popover .ant-popover-content,
.dz-popover .ant-popover-inner,
.dz-popover .ant-popover-inner-content {
  @apply p-0 bg-transparent;
}
</style>

<style>
.dz-popover .ant-popover-inner {
  @apply shadow-lg;
  @apply overflow-hidden;
  @apply border-gray-100;
  border-width: 1px;
}

.dz-popover.dz-popover-rounded .ant-popover-inner {
  @apply rounded-lg;
}

.dz-popover.dz-popover-sharp .ant-popover-inner {
  @apply rounded-lg;
}
</style>
