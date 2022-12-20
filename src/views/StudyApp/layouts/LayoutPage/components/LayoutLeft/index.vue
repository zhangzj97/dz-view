<script setup lang="ts">
import PaneMenu from './components/PaneMenu/index.vue';
</script>

<template>
  <DzFlex class="flex-grow">
    <DzFlex class="h-16" testTitle="Logo"></DzFlex>
    <PaneMenu />
    <DzFlex class="h-16" testTitle="Other"></DzFlex>
  </DzFlex>
</template>
