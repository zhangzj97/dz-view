<script setup lang="ts">
import PaneLabelCol from './components/PaneLabelCol/index.vue';
import PaneLabelRow from './components/PaneLabelRow/index.vue';
</script>

<template>
  <dz-view col size="h-fit w-grow">
    <dz-view row size="h-fit">
      <!-- <PaneLabelCol /> -->
    </dz-view>
    <dz-view row size="h-fit">
      <dz-view one size="w-16">
        <!-- <PaneLabelRow /> -->
      </dz-view>
      <dz-view one size="w-grow">
        <slot></slot>
      </dz-view>
    </dz-view>
  </dz-view>
</template>
