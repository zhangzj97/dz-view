<script setup lang="ts"></script>

<template>
  <v col class="bb" s="w-[100vw] h-[100vh]">
    <v s="w-grow h-grow" w="overflow-auto" desc="body">
      <slot></slot>
    </v>
  </v>
</template>

<style scoped>
.bb * {
  @apply border-2 border-red-300;
}
</style>
