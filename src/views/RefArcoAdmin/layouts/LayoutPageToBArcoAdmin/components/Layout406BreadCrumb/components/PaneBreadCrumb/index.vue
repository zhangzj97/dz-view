<script setup lang="ts">
import BreadCrumb from './components/BreadCrumb/index.vue';

const routeState = reactive({
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
    <BreadCrumb :separator="routeState.separator" :routeList="routeState.list" />
  </dz-view>
</template>
