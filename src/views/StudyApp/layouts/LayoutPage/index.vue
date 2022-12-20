<script setup lang="ts" name="PageLayout">
import LayoutLeft from './components/LayoutLeft/index.vue';
import LayoutRight from './components/LayoutRight/index.vue';
</script>

<template>
  <DzLay class="flex-row flex-grow min-h-screen">
    <DzLay class="z-20 overflow-visible">
      <LayoutLeft />
    </DzLay>
    <DzLay class="z-10 flex-grow max-h-screen overflow-auto">
      <slot class="animate__animated animate__fadeInRight"></slot>
    </DzLay>
    <DzLay>
      <LayoutRight />
    </DzLay>
  </DzLay>
</template>
