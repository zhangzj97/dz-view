<script setup lang="ts" name="PageLayout">
import LayoutLeft from './components/LayoutLeft/index.vue';
import LayoutRight from './components/LayoutRight/index.vue';
import LayoutTop from './components/LayoutTop/index.vue';
</script>

<template>
  <DzLayout class="flex-row flex-grow min-h-screen">
    <DzLayout class="z-20 overflow-visible">
      <LayoutLeft />
    </DzLayout>
    <DzLayout class="z-10 flex-grow max-h-screen overflow-auto">
      <DzLayout>
        <LayoutTop />
      </DzLayout>

      <DzLayout>
        <slot></slot>
      </DzLayout>
    </DzLayout>
    <DzLayout>
      <LayoutRight />
    </DzLayout>
  </DzLayout>
</template>
