<script setup lang="ts">
import PaneMenu from './components/PaneMenu/index.vue';
</script>

<template>
  <FlexContainer class="flex-grow">
    <FlexContainer class="h-16" testTitle="Logo"></FlexContainer>
    <PaneMenu />
    <FlexContainer class="h-16" testTitle="Other"></FlexContainer>
  </FlexContainer>
</template>
