<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <v s="w-grow h-fit">
    <v s="w-32 h-fit">
      <v-space s="w-grow h-fit" />
      <v-text :text="title" />
      <v-space s="w-1 h-fit" />
    </v>
    <v s="w-grow h-fit" grid>
      <slot></slot>
    </v>
  </v>
</template>
