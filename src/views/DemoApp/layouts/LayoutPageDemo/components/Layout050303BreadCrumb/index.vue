<script setup lang="ts" name="Layout050303BreadCrumb">
import PaneBreadCrumb from './components/PaneBreadCrumb/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="flex-grow">
    <dz-row-item class="w-grow">
      <PaneBreadCrumb />
    </dz-row-item>
    <dz-row-item class="w-64">
      <PaneToolSet />
    </dz-row-item>
  </dz-row>
</template>
