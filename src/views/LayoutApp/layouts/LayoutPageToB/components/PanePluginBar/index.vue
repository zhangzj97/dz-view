<script setup lang="ts">
import PaneLocale from './components/PaneLocale/index.vue';
import PaneDarkMode from './components/PaneDarkMode/index.vue';
import PaneMessage from './components/PaneMessage/index.vue';
import PaneFullScreen from './components/PaneFullScreen/index.vue';
import PaneTheme from './components/PaneTheme/index.vue';
import PaneSetting from './components/PaneSetting/index.vue';
</script>

<template>
  <dz-view row size="h-grow">
    <dz-view one size="w-12"><PaneLocale /></dz-view>
    <dz-view one size="w-12"><PaneDarkMode /></dz-view>
    <dz-view one size="w-12"><PaneMessage /></dz-view>
    <dz-view one size="w-12"><PaneFullScreen /></dz-view>
    <dz-view one size="w-12"><PaneTheme /></dz-view>
    <dz-view one size="w-12"><PaneSetting /></dz-view>
  </dz-view>
</template>
