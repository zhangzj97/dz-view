<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';

const actionState = reactive({
  list: [
    //
    { title: '切换用户' },
    { title: '用户信息' },
    { title: '退出登录' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5" pointer>
    <dz-popover placement="bottom" rounded>
      <a-avatar pointer :size="8 * 4" />
      <template #content>
        <PaneMain :base-list="actionState.list" />
      </template>
    </dz-popover>
  </dz-view>
</template>
