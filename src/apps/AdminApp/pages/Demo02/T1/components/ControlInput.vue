<script setup lang="ts">
defineProps<{ s?: string; w?: string }>();
</script>

<template>
  <v :s="s" :w="w">
    <input type="number" class="border-2 border-red-200" />
  </v>
</template>
