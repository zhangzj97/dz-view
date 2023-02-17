<script setup lang="ts">
import PaneTagTab from './components/PaneTagTab/index.vue';

const routeState = reactive({
  list: [
    //
    { title: '首页', fixed: true },
    { title: '普通工单-激活', actived: true },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
    { title: '普通工单' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow">
    <PaneTagTab :base-list="routeState.list" />
  </dz-view>
</template>
