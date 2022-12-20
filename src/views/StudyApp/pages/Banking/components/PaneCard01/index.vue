<script setup lang="ts" name="PaneCard01">
import ChartBar from './components/ChartBar/index.vue';
import ChartLine from './components/ChartLine/index.vue';
</script>

<template>
  <FlexContainer class="px-4" :class="['h-[360px]']">
    <div class="absolute top-0 left-0 flex w-full h-full bg-white rounded-lg shadow-lg -z-10"></div>

    <div class="mt-8"><div class="font-bold">Dylan Zhange</div></div>

    <div class="flex">
      <ChartLine />
      <div class="flex items-center justify-end flex-grow">
        <div class="flex flex-col items-center mr-2">
          <div class="w-8 -mb-2"><ZIcon class="text-green-500" icon="mdi:menu-up" /></div>
          <div><div class="font-bold text-green-500">+13%</div></div>
        </div>
        <div><div class="text-3xl font-bold">$4,000</div></div>
      </div>
    </div>
    <ChartBar />
  </FlexContainer>
</template>
