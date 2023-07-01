<script setup lang="ts"></script>

<template>
  <v col s="w-[100vw] h-[100vh]">
    <v s="w-grow h-grow" class="bg-red-500" w="overflow-auto" desc="body">
      <slot></slot>
    </v>
  </v>
</template>
