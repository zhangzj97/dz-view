<script setup lang="ts">
defineProps<{
  id: string;
  avatar: string;
  title: string;

  collapse: boolean;
  active: boolean;

  showRightIcon: boolean;
}>();

const emit = defineEmits<{
  (e: 'clickMenu', value: any): void;
}>();

const clickMenu = (item: any) => {
  emit('clickMenu', item);
};
</script>

<template>
  <v
    s="w-64 h-10"
    pointer
    class="bg-gray-400 border border-gray-300"
    @click="clickMenu({ id })"
  >
    <v s="w-4 h-grow" space></v>
    <dz-icon s="w-10 h-10" t="text-gray-300" class="scale-50" :icon="avatar" />
    <v s="w-2 h-grow" space></v>
    <v s="w-grow h-10">
      <dz-text t="text-white text-base">{{ title }}</dz-text>
      <v s="w-grow" space></v>
      <dz-text
        v-if="false"
        t="text-xl text-white"
        class="px-3 py-1 scale-50 bg-red-500 rounded-full"
      >
        111
      </dz-text>
    </v>
    <dz-icon
      v-if="showRightIcon"
      s="w-10 h-10"
      t="text-gray-300"
      class="transition-all scale-50"
      :class="[collapse ? 'rotate-90' : '']"
      icon="el:chevron-right"
    />
  </v>
  <v
    :class="[!collapse ? 'max-h-[0px]' : 'max-h-[1000vh]']"
    col
    s="w-64 h-fit"
    w="overflow-hidden"
    class="transition-all"
  >
    <slot></slot>
  </v>
</template>
