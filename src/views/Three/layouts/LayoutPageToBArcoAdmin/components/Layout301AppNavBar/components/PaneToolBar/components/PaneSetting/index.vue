<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';
import { usePopover } from '@/hooks/usePopover';

const { toggle, triggerRef } = usePopover();

const themeState = reactive({
  list: [
    { bg: 'bg-black', title: 'Dark' },
    { bg: 'bg-white', title: 'Light' },
    { bg: 'bg-red-300', title: 'Red' },
    { bg: 'bg-red-300', title: 'Red' },
    { bg: 'bg-blue-300', title: 'Blue' },
    { bg: 'bg-green-300', title: 'Green' },
    { bg: 'bg-pink-300', title: 'Pink' },
    { bg: 'bg-amber-300', title: 'Amber' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover placement="bottom" tooltip="点击打开设置面板">
      <dz-icon pointer size="6" icon="ic:outline-settings" @click="toggle" />
    </dz-popover>

    <dz-popover placement="bottom" trigger="click">
      <div ref="triggerRef"></div>
      <template #content>
        <PaneMain :baseList="themeState.list" />
      </template>
    </dz-popover>
  </dz-view>
</template>
