<script setup lang="ts">
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
  <dz-popover placement="bottom" rounded>
    <dz-view
      one
      pointer
      size="h-grow"
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
    >
      <dz-icon size="6" icon="ic:round-translate" />
    </dz-view>
    <template #content>
      <dz-view col size="w-32" bg="bg-white">
        <template v-for="(item, index) of languageState.list" :key="index">
          <dz-button size="w-grow" text :title="item.title" />
        </template>
      </dz-view>
    </template>
  </dz-popover>
</template>
