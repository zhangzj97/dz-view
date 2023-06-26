<script setup lang="ts">
const routeState = reactive({
  title: '普通工单',
  separator: '/',
  list: [
    //
    { title: '工单管理' },
    { title: '普通工单' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5">
    <dz-font base>{{ routeState.title }}</dz-font>
  </dz-view>
</template>
