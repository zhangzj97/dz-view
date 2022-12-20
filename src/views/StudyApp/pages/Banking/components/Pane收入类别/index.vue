<script setup lang="ts" name="Pane收入类别">
const assetState = reactive({
  list: [
    { title: 'Working Hard', total: '1000', count: '50', class01: 'text-red-500', class02: 'bg-red-500' },
    { title: 'Side Project', total: '1000', count: '0', class01: 'text-pink-500', class02: 'bg-pink-500' },
    { title: 'Invesment', total: '1000', count: '500', class01: 'text-purple-500', class02: 'bg-purple-500' },
    { title: 'Digital Assets', total: '200', count: '50', class01: 'text-red-500', class02: 'bg-red-500' },
    { title: 'Digital Assets', total: '200', count: '50', class01: 'text-red-500', class02: 'bg-red-500' },
  ],
});
</script>

<template>
  <FlexContainer class="flex-shrink-0 px-6" :class="['w-[388px]']">
    <div class="absolute top-0 left-0 flex w-full h-full bg-white rounded-lg shadow-lg -z-10"></div>

    <div class="mt-8 mb-6"><div class="text-lg font-bold">收入类别</div></div>

    <div v-for="(item, index) of assetState.list" :key="index" class="flex flex-col gap-2 mb-8">
      <div>
        <div>{{ item.title }}</div>
      </div>

      <div class="relative flex w-full h-4">
        <div class="absolute w-full h-4 bg-gray-100 rounded-md"></div>
        <div class="absolute h-4 transition-all rounded-md" :class="[item.class02]" :style="{ width: `${(100 * Number(item.count)) / Number(item.total)}%` }"></div>
      </div>

      <div class="flex items-center gap-2">
        <div class="text-sm">$50</div>
        <div class="text-sm" :class="[item.class01]">/</div>
        <div class="text-sm" :class="[item.class01]">form $1000</div>
      </div>
    </div>
  </FlexContainer>
</template>
