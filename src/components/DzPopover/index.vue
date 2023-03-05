<script setup lang="ts">
import PopoverAntd from './components/PopoverAntd/index.vue';
import PopconfirmAntd from './components/PopconfirmAntd/index.vue';

const props = defineProps<{
  placement?: any;
  overlayClassName?: string;

  rounded?: boolean;
  sharp?: boolean;

  tooltip?: string;
  confirm?: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancle'): void;
}>();

const handleOk = () => {
  emit('ok');
};

const handleCancle = () => {
  emit('cancle');
};

const parseOverlayClassName = () => {
  const result = ['dz-popover', props.overlayClassName];

  if (props.rounded) result.push('dz-popover-rounded');
  if (props.sharp) result.push('dz-popover-sharp');
  if (props.tooltip) result.push('dz-popover-tooltip');

  return result.join(' ');
};
</script>

<template>
  <PopoverAntd
    v-if="tooltip"
    :overlay-class-name="parseOverlayClassName()"
    :placement="placement"
  >
    <slot></slot>
    <template #content>
      <slot name="content">
        <div class="text-sm text-gray-100">{{ tooltip }}</div>
      </slot>
    </template>
  </PopoverAntd>

  <PopconfirmAntd
    v-else-if="confirm"
    :overlay-class-name="parseOverlayClassName()"
    :placement="placement"
    :title="confirm"
    @handleOk="handleOk"
    @handleCancle="handleCancle"
  >
    <slot></slot>
  </PopconfirmAntd>

  <PopoverAntd
    v-else
    :overlay-class-name="parseOverlayClassName()"
    :placement="placement"
  >
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

<style>
.dz-popover.dz-popover-tooltip .ant-popover-arrow-content {
  @apply bg-gray-700;
}

.dz-popover.dz-popover-tooltip .ant-popover-inner {
  @apply rounded-sm;
  @apply bg-gray-700;
  @apply border-gray-700;
  @apply py-1 px-2;
}
</style>
