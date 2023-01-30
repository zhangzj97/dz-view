<script setup lang="ts" name="Layout040101AppNavBar">
import PaneAppNav from './components/PaneAppNav/index.vue';
import PaneLogo from './components/PaneLogo/index.vue';
import PaneAvatar from './components/PaneAvatar/index.vue';
import PaneToolSet from './components/PaneToolSet/index.vue';
</script>

<template>
  <dz-row class="flex-grow">
    <dz-row-item class="w-64">
      <PaneLogo />
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneAppNav />
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneToolSet />
    </dz-row-item>
    <dz-row-item class="w-16">
      <PaneAvatar />
    </dz-row-item>
  </dz-row>
</template>
