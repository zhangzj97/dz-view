<script setup lang="ts">
const configState = reactive<any>(inject('config') || {});
</script>

<template>
  <dz-view row size="h-grow">
    <dz-view one size="w-16" position="5">
      <dz-icon size="10" icon="icon-logo-icon" />
    </dz-view>

    <dz-view row size="w-48" position="4">
      <dz-font xl bold>{{ configState.logoTitle }}</dz-font>
    </dz-view>
  </dz-view>
</template>
