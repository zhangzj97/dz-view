<script setup lang="ts">
import DialogElement from './components/DialogElement/index.vue';
import DrawerElement from './components/DrawerElement/index.vue';

defineProps<{
  title?: string | false;

  visible?: boolean;
  loading?: boolean;
  fullScreen?: boolean;

  dialog?: boolean;
  drawer?: boolean;
}>();

const emit = defineEmits<{
  (e: 'updateVisible', visible: boolean): void;
}>();

const handleUpdateVisible = (value: boolean) => {
  emit('updateVisible', value);
};
</script>

<template>
  <DrawerElement
    v-if="drawer"
    :title="title"
    :visible="visible"
    @updateVisible="handleUpdateVisible"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </DrawerElement>
  <DialogElement
    v-else
    :title="title"
    :visible="visible"
    @updateVisible="handleUpdateVisible"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </DialogElement>
</template>
