<script setup lang="ts" name="Layout030101SearchBar">
import PaneBack from './components/PaneBack/index.vue';
import PaneTitle from './components/PaneTitle/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="h-full">
    <dz-row-item>
      <PaneBack class="w-64" />
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneTitle />
    </dz-row-item>
    <dz-row-item>
      <PaneToolSet class="w-64" />
    </dz-row-item>
  </dz-row>
</template>
