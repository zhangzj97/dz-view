<script setup lang="ts" name="ECharts">
import type { EChartsOption } from 'echarts';
import { BarChart, LineChart, type BarSeriesOption, type LineSeriesOption } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  type DatasetComponentOption,
  type GridComponentOption,
  type TitleComponentOption,
  type ToolboxComponentOption,
} from 'echarts/components';
import type { EChartsType } from 'echarts/core';
import * as echarts from 'echarts/core';

import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

type ECOption = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | ToolboxComponentOption | GridComponentOption | DatasetComponentOption>;

echarts.use([LineChart, BarChart, TitleComponent, ToolboxComponent, GridComponent, DatasetComponent, LabelLayout, UniversalTransition, CanvasRenderer]);

const props = defineProps<{
  option: EChartsOption;
  width: string;
  height: string;
}>();

const ECDom = ref<HTMLElement>();
const chartState = reactive<{
  instance: EChartsType | null;
  dom: HTMLElement | null;
}>({
  instance: null,
  dom: null,
});

const refreshChart = () => {
  if (!ECDom.value) return;
  chartState.instance = echarts.init(ECDom.value);
  chartState.instance.setOption(props.option);
};

watch(
  () => ECDom,
  () => refreshChart()
);

watch(
  () => props.option,
  () => refreshChart()
);

onMounted(() => refreshChart());
</script>

<template>
  <DzFlex>
    <div ref="ECDom" :style="{ width, height }"></div>
  </DzFlex>
</template>
