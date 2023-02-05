<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';

const routeActionState = reactive({
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
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="border-l-[1px] rouned border-gray-300 hover:bg-gray-100">
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:outline-file-copy" />
      <template #content>
        <PaneMain :base-list="routeActionState.list" />
      </template>
    </dz-popover>
  </dz-view>
</template>
