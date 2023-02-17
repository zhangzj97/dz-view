<script setup lang="ts">
import PaneMain from './components/PaneMain/index.vue';

const languageState = reactive({
  list: [
    //
    { title: '中文' },
    { title: '英文' },
    { title: '日文' },
    { title: '韩文' },
  ],
});
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:round-translate" />
      <template #content>
        <PaneMain :base-list="languageState.list" />
      </template>
    </dz-popover>
  </dz-view>
</template>
