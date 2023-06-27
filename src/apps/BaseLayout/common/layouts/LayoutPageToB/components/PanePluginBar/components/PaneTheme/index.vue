<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';

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
  <dz-popover placement="bottom" rounded>
    <dz-view
      one
      size="h-grow"
      pointer
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
    >
      <dz-icon size="6" icon="ic:outline-palette" />
    </dz-view>
    <template #content>
      <PaneMain :baseList="themeState.list" />
    </template>
  </dz-popover>
</template>
