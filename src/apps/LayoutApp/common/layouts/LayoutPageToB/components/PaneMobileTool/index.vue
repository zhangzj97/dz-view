<script setup lang="ts">
import PaneSearch from './components/PaneSearch/index.vue';
import PaneSetting from './components/PaneSetting/index.vue';
</script>

<template>
  <dz-view row size="h-grow">
    <dz-view one size="w-12"><PaneSearch /></dz-view>
    <dz-view one size="w-12"><PaneSetting /></dz-view>
  </dz-view>
</template>
