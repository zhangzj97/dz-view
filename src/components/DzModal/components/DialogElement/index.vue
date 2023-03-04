<script setup lang="ts">
defineProps<{
  title?: string | false;

  visible?: boolean;
  loading?: boolean;
  fullScreen?: boolean;
}>();

const emit = defineEmits<{
  (e: 'updateVisible', visible: boolean): void;
}>();

const handleUpdateVisible = (value: boolean) => {
  emit('updateVisible', value);
};
</script>

<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="handleUpdateVisible"
    :with-header="false"
    :show-close="false"
    :append-to-body="false"
    :close-on-press-escape="true"
    :close-on-click-modal="true"
    draggable
  >
    <template #header>
      <dz-view
        row
        size="h-12 w-full"
        position="4"
        wrapper-class="px-2 shadow-sm"
      >
        <dz-view size="w-grow">
          <dz-font lg>{{ title }}</dz-font>
        </dz-view>

        <dz-view size="w-fit">
          <dz-button
            text
            icon="ic:round-close"
            @click="handleUpdateVisible(false)"
          />
        </dz-view>
      </dz-view>
    </template>
    <dz-view col size="w-grow">
      <dz-view
        col
        size="h-grow"
        class="min-h-[30vh] max-h-[65vh]"
        overflow
        wrapper-class="shadow-sm"
      >
        <slot></slot>
      </dz-view>
      <slot name="footer"></slot>
    </dz-view>
  </el-dialog>
</template>

<style>
.el-dialog__header,
.el-dialog__body {
  @apply p-0;
}
.el-dialog__header {
  @apply mr-0;
}

.el-dialog {
  @apply rounded-md;
}
</style>
