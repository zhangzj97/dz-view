<script setup lang="ts" name="PageLayout">
import LayoutLeft from './components/LayoutLeft/index.vue';
import LayoutRight from './components/LayoutRight/index.vue';
import LayoutTop from './components/LayoutTop/index.vue';
import LayoutTag from './components/LayoutTag/index.vue';
</script>

<template>
  <DzLayout class="flex-row flex-grow min-h-screen">
    <!-- LayoutLeft -->
    <DzLayout class="z-20 overflow-visible">
      <LayoutLeft />
    </DzLayout>
    <DzLayout class="z-10 flex-grow max-h-screen overflow-auto">
      <DzLayout class="sticky top-0 z-50">
        <!-- LayoutTop -->
        <DzLayout>
          <LayoutTop />
        </DzLayout>
        <!-- LayoutTop2 for page tag -->
        <DzLayout>
          <LayoutTop2 />
        </DzLayout>
      </DzLayout>

      <!-- LayoutBody -->
      <DzLayout>
        <slot></slot>
      </DzLayout>
    </DzLayout>
    <!-- LayoutRight -->
    <DzLayout>
      <LayoutRight />
    </DzLayout>
  </DzLayout>
</template>
