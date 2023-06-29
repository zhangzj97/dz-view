<script setup lang="ts">
defineProps<{
  id?: string;
  avatar?: string;
  title?: string;

  active?: boolean;

  showRightIcon?: boolean;
}>();

const emit = defineEmits<{
  (e: 'closeRouteTag', value: any): void;
}>();

const closeRouteTag = (item: any) => {
  emit('closeRouteTag', item);
};
</script>

<template>
  <v
    s="w-fit h-8"
    class="border-[1px] border-gray-300 rounded-md"
    hover="hover:bg-gray-100"
    pointer
  >
    <v s="w-4 h-8" space />
    <dz-text t="text-gray-600 text-sm" :text="title" />
    <dz-icon
      s="w-8 h-8"
      icon="ic:round-close"
      t="text-gray-300"
      hover="hover:text-gray-800"
      class="scale-50"
      @click="closeRouteTag({ id })"
    />
  </v>
</template>
