<script setup lang="ts">
defineProps<{
  avatar: string;
  title: string;
}>();
</script>

<template>
  <v s="w-64 h-10" pointer class="bg-gray-600 border border-gray-500">
    <v s="w-0 h-grow" space></v>
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
      t="text-gray-500"
      class="scale-50"
      icon="el:chevron-right"
    />
  </v>
  <v s="w-64 h-fit" col>
    <slot></slot>
  </v>
</template>
