<script setup lang="ts">
// TODO 事件穿透
defineProps<{
  id?: string;
  avatar?: string;
  title?: string;

  active?: boolean;

  showRightIcon?: boolean;
}>();

const emit = defineEmits<{
  (e: 'removeRouteTag', value: any): void;
  (e: 'clickRouteTag', value: any): void;
}>();

const removeRouteTag = (item: any) => {
  emit('removeRouteTag', item);
};
const clickRouteTag = (item: any) => {
  emit('clickRouteTag', item);
};
</script>

<template>
  <v
    s="w-fit h-8"
    w="overflow-hidden"
    class="border-[1px] border-gray-300 rounded-md group"
    :class="[active ? 'bg-blue-200' : 'bg-gray-100']"
    :hover="[active ? 'hover:bg-blue-100' : 'hover:bg-gray-100']"
    pointer
    trans
  >
    <v-space s="w-4 h-grow" @click="clickRouteTag({ id })" />
    <v-text t="text-gray-600 text-sm" trans="group-hover:text-blue-300" :text="title" @click="clickRouteTag({ id })" />
    <v-space s="w-4 h-grow" @click="clickRouteTag({ id })" />
    <v v-if="showRightIcon" s="w-8 h-8" v="mouse-gray" @click="removeRouteTag({ id })">
      <v-icon v="8-50" t="text-gray-300" class="opacity-0 group-hover:opacity-100" icon="ic:round-close" />
    </v>
  </v>
</template>
