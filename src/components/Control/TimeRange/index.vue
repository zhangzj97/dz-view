<script setup lang="ts">
import TriggerText from '../__components/TriggerText.vue';
import CacheText from '../__components/CacheText.vue';
import dayjs from 'dayjs';

import { useRangePicker } from './hooks/useRangePicker';

import { RangePicker } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

defineOptions({ name: 'ControlDatetime' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is } = useValidate();
const { el, methods, events, handleValue } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

const { rangePickerEvents } = useRangePicker({ props });

onBeforeMount(async () => {
  await handleValue.set(props.payload.defaultValue || null);
  handleService.set([
    { id: 1, title: 'next 7 days', data: { value: () => [dayjs(), dayjs().add(1, 'week')] } },
    { id: 2, title: 'next 30 days', data: { value: () => [dayjs(), dayjs().add(1, 'month')] } },
  ]);
});

watch(
  () => props.value,
  v => handleCache.set(v)
);

const computedTriggerText = computed(() => {
  return props.value.map((item: any) => item && dayjs(Number(item)).format(props.payload.format)).join(' - ');
});

const computedCacheText = computed(() => {
  return cache.value.map((item: any) => item && dayjs(Number(item)).format(props.payload.format)).join(' - ');
});

const computedCacheValue = computed(() => cache.value.map((item: any) => item && Number(item)));

const computedServiceList = computed(() => {
  const func = ({ id, title, data }: any) => ({ id, label: title, value: data.value });
  return service.list.map(func);
});

const rangePickerEventsChange = (_dateStr: any | any[], date: any | any[]): void => {
  const v = date
    // TODO 可能有问题
    .sort((a: any, b: any) => a - b)
    .map((item: any) => String(item.valueOf()));
  handleValue.set(v);
};

const rangePickerEventsSelectWithCache = (_dateStr: any[], date: any[]): void => {
  const v = date
    // TODO 可能有问题
    .sort((a: any, b: any) => a - b)
    .map(item => String(item.valueOf()));
  handleCache.set(v);
};
const rangePickerEventsSelectShortcut = (shortcut: any) => {
  const v = shortcut
    .value()
    // TODO 可能有问题
    .sort((a: any, b: any) => a - b)
    .map((item: any) => String(item.valueOf()));
  handleValue.set(v);
};

const ok = () => {
  handleValue.set(cache.value);
};
</script>

<template>
  <dz-popover :payload="{ embed: payload.embed, position: 'bl' }">
    <TriggerText
      :payload="payload"
      :text="computedTriggerText"
      :value="value"
      :warning="null"
      @reset="methods.clearArray"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v v-if="!payload.hiddenTime" s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
          <dz-popover :payload="{ tooltip: '自定义选择时间后 需要点击确认' }">
            <dz-btn v-if="handleValue.diff(cache.value)" title="确认" :payload="{ type: 'primary' }" @click="ok" />
            <dz-btn v-else icon="mdi:check" />
          </dz-popover>
        </v>

        <RangePicker
          ref="el"
          :showTime="!payload.hiddenTime"
          :allowClear="false"
          :popupVisible="true /* bug : 时间滚动效果 */"
          :hide-trigger="true"
          shortcutsPosition="right"
          :shortcuts="computedServiceList"
          :modelValue="computedCacheValue /** bug: pickerValue */"
          @update:pickerValue="rangePickerEvents.updatePickerValue"
          @update:modelValue="rangePickerEvents.updateModelValue"
          @change="rangePickerEventsChange"
          @select="rangePickerEventsSelectWithCache"
          @popupVisibleChange="rangePickerEvents.popupVisibleChange"
          @ok="rangePickerEvents.ok"
          @clear="rangePickerEvents.clear"
          @selectShortcut="rangePickerEventsSelectShortcut"
          @pickerValueChange="rangePickerEvents.pickerValueChange"
        >
        </RangePicker>
      </v>
    </template>
  </dz-popover>
</template>

<style lang="scss" scoped>
:deep(.arco-picker-range-panel-wrapper > .arco-picker-footer) {
  height: 0px;
}
</style>
