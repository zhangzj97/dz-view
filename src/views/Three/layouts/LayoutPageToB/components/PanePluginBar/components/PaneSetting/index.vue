<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';
import { useModal } from '@/hooks/useModal';

const { toggleTrigger, triggerDom } = useModal();

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

const toggle = () => {
  toggleTrigger();
};
</script>

<template>
  <dz-popover placement="bottom" tooltip="点击打开设置面板">
    <dz-view
      one
      pointer
      size="h-grow"
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
    >
      <dz-icon size="6" icon="ic:outline-settings" @click="toggle" />
    </dz-view>
  </dz-popover>
  <dz-popover placement="bottom" trigger="click">
    <div ref="triggerDom"></div>
    <template #content>
      <PaneMain :baseList="themeState.list" />
    </template>
  </dz-popover>
</template>
