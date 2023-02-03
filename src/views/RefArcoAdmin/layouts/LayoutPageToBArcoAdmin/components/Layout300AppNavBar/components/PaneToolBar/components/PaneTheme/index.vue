<script setup lang="ts">
const themeState = reactive({
  list: [
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
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:outline-palette" />
      <template #content>
        <dz-view grid pointer size="w-96" bg="bg-white" wrapper-class="p-2">
          <template v-for="(item, index) of themeState.list" :key="index">
            <dz-view col size="w-1/3 h-24" wrapper-class="p-2 transition-all rounded hover:bg-gray-100">
              <dz-view one size="h-16" :bg="item.bg"></dz-view>
              <dz-view one size="h-grow" position="5">
                <dz-font>{{ item.title }}</dz-font>
              </dz-view>
            </dz-view>
          </template>
        </dz-view>
      </template>
    </dz-popover>
  </dz-view>
</template>
