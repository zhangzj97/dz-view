<script setup lang="ts">
const exceptionState = reactive({
  icon: 'icon-exception-500',
  title: '500',
  description: '网络错误',
});
</script>

<template>
  <dz-view col size="h-grow" position="5">
    <dz-view one size="h-96" position="5">
      <dz-icon size="64" :icon="exceptionState.icon" />
    </dz-view>
    <dz-view one size="h-fit" position="5">
      <dz-font bold class="text-6xl">{{ exceptionState.title }}</dz-font>
    </dz-view>
    <dz-view one size="h-20" position="5">
      <dz-font lg>{{ exceptionState.description }}</dz-font>
    </dz-view>
    <dz-view row size="h-16" position="5" wrapper-class="gap-2">
      <a-button>返回首页</a-button>
      <a-button>刷新</a-button>
    </dz-view>
  </dz-view>
</template>
