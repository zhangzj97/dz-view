<script setup lang="ts">
defineProps<{
  id: string;
  avatar: string;
  title: string;

  collapse: boolean;
}>();

const emit = defineEmits<{
  (e: 'clickMenu', value: any): void;
}>();

const clickMenu = item => {
  emit('clickMenu', item);
};
</script>

<template>
  <v
    s="w-64 h-10"
    pointer
    class="bg-gray-500 border border-gray-400"
    @click="clickMenu({ id })"
  >
    <v s="w-2 h-grow" space></v>
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
      s="w-10 h-10"
      t="text-gray-400"
      class="scale-50"
      icon="el:chevron-right"
    />
  </v>
  <v v-if="collapse" s="w-64 h-fit" col>
    <slot></slot>
  </v>
</template>
