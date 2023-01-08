<script setup lang="ts" name="Layout050302RouteTab">
import PaneRouteTab from './components/PaneRouteTab/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="flex-grow">
    <dz-row-item class="w-grow">
      <PaneRouteTab />
    </dz-row-item>
    <dz-row-item class="w-64">
      <PaneToolSet />
    </dz-row-item>
  </dz-row>
</template>
