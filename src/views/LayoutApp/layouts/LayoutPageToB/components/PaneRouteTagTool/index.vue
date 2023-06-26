<script setup lang="ts">
// import PaneMore from './components/PaneMore/index.vue';
import PaneRefresh from './components/PaneRefresh/index.vue';
// import PaneRoute from './components/PaneRoute/index.vue';
</script>

<template>
  <dz-view row size="h-grow">
    <!-- <dz-view one size="w-12"><PaneMore /></dz-view> -->
    <dz-view one size="w-12"><PaneRefresh /></dz-view>
    <!-- <dz-view one size="w-12"><PaneRoute /></dz-view> -->
  </dz-view>
</template>
