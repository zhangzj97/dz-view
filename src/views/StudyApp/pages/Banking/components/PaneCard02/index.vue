<script setup lang="ts" name="PaneCard02">
import ChartBar from './components/ChartBar/index.vue';
import ChartLine from './components/ChartLine/index.vue';
</script>

<template>
  <FlexContainer class="px-4" :class="['h-[360px]']">
    <div class="absolute top-0 left-0 flex w-full h-full bg-white rounded-lg shadow-lg -z-10"></div>

    <div class="mt-8"><div class="font-bold">Tom Wang</div></div>

    <div class="flex">
      <ChartLine />
      <div class="flex items-center justify-end flex-grow">
        <div class="flex flex-col items-center mr-2">
          <div class="w-8 -mb-2"><ZIcon class="text-red-500" icon="mdi:menu-down" /></div>
          <div><div class="font-bold text-red-500">-13%</div></div>
        </div>
        <div><div class="text-3xl font-bold">$14,000</div></div>
      </div>
    </div>
    <ChartBar />
  </FlexContainer>
</template>
