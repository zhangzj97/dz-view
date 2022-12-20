<script setup lang="ts" name="Chart">
import ECharts from '@/views/StudyApp/components/ECharts/index.vue';
import type { EChartsOption } from 'echarts';

const ECOption: EChartsOption = {
  grid: { top: 8, bottom: 16, left: 0, right: 0 },
  xAxis: { type: 'category', show: false },
  yAxis: { type: 'value', show: false },
  dataset: {
    source: [
      [1, 100], //
      [2, 200],
      [3, 120],
      [4, 340],
      [5, 320],
      [6, 10],
      [7, 200],
      [8, 20],
    ],
  },
  series: [
    {
      type: 'line',
      itemStyle: { opacity: 0 },
      lineStyle: {
        width: 4,
        color: '#0ff',
        shadowColor: '#00000080',
        shadowBlur: 4,
        shadowOffsetY: 1,
        cap: 'round',
      },
      smooth: true,
    },
  ],
};
</script>

<template>
  <DzFlex>
    <ECharts ref="ECDom" width="140px" height="80px" :option="ECOption" />
  </DzFlex>
</template>
