<script setup lang="ts" name="LayoutPage">
import LayoutFlex from '../../components/LayoutFlex/index.vue';
import DzTest from '@/components/DzTest/index.vue';
import Layout010101Test from './components/Layout010101Test/index.vue';
import Layout010101Test2 from './components/Layout010101Test2/index.vue';

const layoutState = reactive<{
  children: any[];
}>({
  children: [
    { size: 'h-16', component: () => DzTest, props: { testTitle: '1' } },
    {
      size: 'h-16',
      children: [
        { size: 'h-16', component: () => DzTest, props: { testTitle: '1' } },
        { size: 'h-grow', component: () => DzTest, props: { testTitle: '1' } },
      ],
    },
    {
      size: 'h-16',
      children: [
        { size: 'h-12', component: () => DzTest, props: { testTitle: '2' } },
        { size: 'h-grow', component: () => DzTest, props: { testTitle: '2' } },
      ],
    },

    {
      size: 'h-16',
      children: [
        { size: 'w-12', component: () => DzTest, props: { testTitle: '3' } },
        { size: 'w-grow', component: () => DzTest, props: { testTitle: '3' } },
      ],
    },

    // { size: 'h-grow', component: () => Layout010101Test },
    { size: 'h-16', component: () => DzTest, props: { testTitle: '5' } },
    {
      size: 'h-grow',
      children: [
        { size: 'w-16', component: () => DzTest, props: { testTitle: '2' } },
        { size: 'w-16', component: () => DzTest, props: { testTitle: '3' } },
        { size: 'w-grow', component: () => Layout010101Test2 },
        { size: 'w-16', component: () => DzTest, props: { testTitle: '5' } },
      ],
    },
    { size: 'h-16', component: () => DzTest, props: { testTitle: '3' } },
  ],
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden bg-gray-100">
    <LayoutFlex :layoutInfo="layoutState" />
  </div>
</template>
