<script setup lang="ts">
import { useNoticeStyle } from './hooks/useNoticeStyle';
const { noticeStyleState, toggleNotice } = useNoticeStyle();

const noticeState = reactive({
  title: 'Dz Admin 发布新版本, 前去查看',
});
</script>

<script lang="ts"></script>

<template>
  <dz-view one size="h-grow">
    <dz-view
      row
      :class="[
        //
        noticeStyleState.height,
        noticeStyleState.opacity,
      ]"
      pointer
      transition
      position="5"
      bg="bg-green-300"
      overflow-hidden
      @click="toggleNotice"
    >
      <dz-font>{{ noticeState.title }}</dz-font>
    </dz-view>
  </dz-view>
</template>
