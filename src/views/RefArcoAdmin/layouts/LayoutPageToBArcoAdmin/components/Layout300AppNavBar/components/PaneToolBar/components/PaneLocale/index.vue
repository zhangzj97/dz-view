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
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:round-translate" />
      <template #content>
        <!-- pane-language -->
        <dz-view col size="w-24" bg="bg-white">
          <template v-for="(item, index) of languageState.list" :key="index">
            <dz-view one pointer size="h-8" position="5" class="hover:bg-gray-100">
              <dz-font pointer>{{ item.title }}</dz-font>
            </dz-view>
          </template>
        </dz-view>
        <!-- pane-language -->
      </template>
    </dz-popover>
  </dz-view>
</template>
