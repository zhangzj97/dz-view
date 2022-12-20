<script setup lang="ts" name="Chart">
import ECharts from '@/views/StudyApp/components/ECharts/index.vue';
import type { EChartsOption } from 'echarts';

const ECOption: EChartsOption = {
  grid: { top: 16, bottom: 32, left: 32, right: 0 },
  xAxis: { type: 'category', axisLine: { show: false }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { opacity: 0.3 } } },
  dataset: {
    source: [
      [1, 100], //
      [2, 200],
      [3, 120],
      [4, 340],
      [5, 320],
      [6, 10],
      [7, 200],
    ],
  },
  series: [
    {
      type: 'bar',
      barWidth: '16px',
      itemStyle: { borderRadius: [4, 4, 0, 0] },
    },
  ],
};
</script>

<template>
  <FlexContainer>
    <ECharts ref="ECDom" width="352px" height="200px" :option="ECOption" />
  </FlexContainer>
</template>
