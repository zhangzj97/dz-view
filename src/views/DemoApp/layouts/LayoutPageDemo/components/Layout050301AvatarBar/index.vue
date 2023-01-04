<script setup lang="ts" name="Layout050301AvatarBar">
import PaneBreadCrumb from './components/PaneBreadCrumb/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
import PaneAvatar from './components/PaneAvatar/index.vue';
</script>

<template>
  <dz-row class="h-full">
    <dz-row-item class="w-grow">
      <PaneBreadCrumb />
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneToolSet />
    </dz-row-item>
    <dz-row-item class="w-16">
      <PaneAvatar />
    </dz-row-item>
  </dz-row>
</template>
