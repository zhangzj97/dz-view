<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';

const routeActionState = reactive({
  list: [
    //
    { title: '关闭当前标签页' },
    { title: '关闭其他标签页' },
    { title: '关闭所有标签页' },
    { title: '其他' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="border-l-[1px] rouned border-gray-300 hover:bg-gray-100">
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:round-more-horiz" />
      <template #content>
        <PaneMain :base-list="routeActionState.list" />
      </template>
    </dz-popover>
  </dz-view>
</template>
