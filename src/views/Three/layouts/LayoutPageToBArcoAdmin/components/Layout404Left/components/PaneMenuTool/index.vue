<script setup lang="ts" name="PaneMenu">
import { useSourceMenuStateStore } from '@/hooks/useSourceStore';
const { changeMode, changeCollapsed, changeTheme } = useSourceMenuStateStore();
</script>

<template>
  <dz-view col overflow>
    <dz-font>changeMode</dz-font>
    <dz-view row>
      <dz-icon @click="changeMode({ mode: 'vertical' })" size="6" icon="ic:round-filter-1" />
      <dz-icon @click="changeMode({ mode: 'horizontal' })" size="6" icon="ic:round-filter-2" />
      <dz-icon @click="changeMode({ mode: 'inline' })" size="6" icon="ic:round-filter-3" />
    </dz-view>
    <dz-font>changeCollapsed</dz-font>
    <dz-view row>
      <dz-icon @click="changeCollapsed({ collapsed: true })" size="6" icon="ic:round-filter-1" />
      <dz-icon @click="changeCollapsed({ collapsed: false })" size="6" icon="ic:round-filter-2" />
      <dz-icon @click="changeCollapsed({ collapsed: null })" size="6" icon="ic:round-filter-3" />
    </dz-view>
    <dz-font>changeTheme</dz-font>
    <dz-view row>
      <dz-icon @click="changeTheme({ theme: 'light' })" size="6" icon="ic:round-filter-1" />
      <dz-icon @click="changeTheme({ theme: 'dark' })" size="6" icon="ic:round-filter-2" />
    </dz-view>
  </dz-view>
</template>
