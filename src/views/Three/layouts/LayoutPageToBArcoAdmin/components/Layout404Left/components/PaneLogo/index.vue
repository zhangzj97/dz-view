<script setup lang="ts">
import { useSourceMenuStore, useSourceMenuStateStore } from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';
const configState = reactive<any>(inject('config') || {});

const { collapsed, mode, theme } = storeToRefs(useSourceMenuStateStore());
</script>

<template>
  <dz-view row size="h-grow">
    <dz-view one size="w-16" position="5">
      <dz-icon size="10" icon="icon-logo-icon" />
    </dz-view>

    <dz-view transition row :size="!collapsed ? 'w-48' : 'w-0'" overflow-hidden position="4">
      <dz-font xl bold class="whitespace-nowrap">{{ configState.logoTitle }}</dz-font>
    </dz-view>
  </dz-view>
</template>
