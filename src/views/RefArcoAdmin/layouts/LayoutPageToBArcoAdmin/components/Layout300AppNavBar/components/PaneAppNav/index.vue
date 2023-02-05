<script setup lang="ts">
const appState = reactive({
  list: [
    //
    { title: '工单系统' },
    { title: '用户系统' },
    { title: '模型系统' },
    { title: '工单系统' },
  ],
});
</script>

<template>
  <dz-view row size="h-grow">
    <template v-for="(item, index) of appState.list" :key="index">
      <dz-view pointer one size="w-20" position="5" wrapper-class="transition-all border-green-500 hover:border-b-4">
        <dz-font bold>{{ item.title }}</dz-font>
      </dz-view>
    </template>
  </dz-view>
</template>
