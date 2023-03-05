<script setup lang="ts">
defineProps<{
  title?: string;
  overlayClassName?: string;
  placement?: any;
}>();

const emit = defineEmits<{
  (e: 'handleOk'): void;
  (e: 'handleCancle'): void;
}>();

const handleOk = () => {
  emit('handleOk');
  popoverState.visible = false;
};

const handleCancle = () => {
  emit('handleCancle');
  popoverState.visible = false;
};

const popoverState = reactive({
  visible: false,
});

const updateVisible = (value: boolean) => {
  popoverState.visible = value;
};
</script>

<template>
  <a-popover
    :visible="popoverState.visible"
    @update:visible="updateVisible"
    :overlay-class-name="overlayClassName"
    :placement="placement"
    trigger="click"
  >
    <slot></slot>
    <template #content>
      <dz-view
        row
        size="h-fit"
        class="max-w-[400px]"
        bg="bg-white"
        wrapper-class="px-2 pt-4"
      >
        <dz-view one size="w-10" class="shrink-0" position="2">
          <dz-icon size="6" icon="ic:round-error-outline"></dz-icon>
        </dz-view>

        <dz-view one size="w-grow">
          <dz-font>{{ title }}</dz-font>
        </dz-view>
      </dz-view>
      <dz-view
        row
        size="h-fit"
        bg="bg-white"
        position="6"
        wrapper-class="gap-2 p-2"
      >
        <dz-button text title="取消" @click="handleCancle" />
        <dz-button primary title="确认" @click="handleOk" />
      </dz-view>
    </template>
  </a-popover>
</template>
