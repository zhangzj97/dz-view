<script setup lang="ts" name="Layout030101SearchBar">
import PaneBack from './components/PaneBack/index.vue';
import PaneTitle from './components/PaneTitle/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="flex-grow">
    <dz-row-item class="w-64">
      <PaneBack />
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneTitle />
    </dz-row-item>
    <dz-row-item class="w-64">
      <PaneToolSet />
    </dz-row-item>
  </dz-row>
</template>
