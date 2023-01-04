<script setup lang="ts" name="Layout040101AppNavBar">
import PaneLogo from './components/PaneLogo/index.vue';
import PaneMenu from './components/PaneMenu/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="h-full" row-item>
    <dz-row row-item class="h-16">
      <PaneLogo />
    </dz-row>
    <dz-row row-item class="h-grow">
      <PaneMenu />
    </dz-row>
    <dz-row row-item class="h-16">
      <PaneToolSet />
    </dz-row>
  </dz-row>
</template>
