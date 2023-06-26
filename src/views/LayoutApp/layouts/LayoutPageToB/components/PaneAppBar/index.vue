<script setup lang="ts">
const appState = reactive({
  appList: [
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
    <template v-for="(item, index) of appState.appList" :key="index">
      <dz-view
        one
        size="w-fit"
        position="5"
        transition
        pointer
        :wrapper-class="['px-2', 'border-green-500 hover:border-b-4']"
      >
        <dz-font bold>{{ item.title }}</dz-font>
      </dz-view>
    </template>
  </dz-view>
</template>
