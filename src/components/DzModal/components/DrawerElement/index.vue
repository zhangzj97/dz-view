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
  <el-drawer
    size="40%"
    direction="rtl"
    :model-value="visible"
    @update:model-value="handleUpdateVisible"
    :with-header="false"
    :show-close="false"
    :append-to-body="false"
    :close-on-press-escape="true"
    :close-on-click-modal="true"
  >
    <dz-view col size="w-grow h-full">
      <slot v-if="title" name="header">
        <dz-view row size="h-16" position="4" wrapper-class="px-2 shadow-sm">
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
      </slot>
      <dz-view col size="h-grow h-0" overflow wrapper-class="shadow-sm">
        <slot></slot>
      </dz-view>
      <slot name="footer"></slot>
    </dz-view>
  </el-drawer>
</template>

<style lang="scss">
.el-drawer__body {
  @apply p-0;
}
</style>
