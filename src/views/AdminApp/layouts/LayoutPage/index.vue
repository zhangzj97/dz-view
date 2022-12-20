<script setup lang="ts" name="PageLayout">
import LayoutLeft from './components/LayoutLeft/index.vue';
import LayoutRight from './components/LayoutRight/index.vue';
</script>

<template>
  <LayoutContainer class="flex-row flex-grow min-h-screen">
    <LayoutContainer class="z-20 overflow-visible"><LayoutLeft /></LayoutContainer>
    <LayoutContainer class="z-10 flex-grow max-h-screen overflow-auto"><slot class="animate__animated animate__fadeInRight"></slot></LayoutContainer>
    <LayoutContainer><LayoutRight /></LayoutContainer>
  </LayoutContainer>
</template>
