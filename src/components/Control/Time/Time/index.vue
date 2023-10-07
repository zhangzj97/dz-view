<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
import dayjs from 'dayjs';

import { useDatePicker } from './useDatePicker';

import { DatePicker } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

defineOptions({ name: 'ControlDatetime' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is } = useValidate();
const { el, methods, events } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

const { datePickerEvents } = useDatePicker();

onMounted(() => {
  emits('update:value', null);
  handleService.set([
    { id: 1, title: '现在', data: { value: () => dayjs() } },
    { id: 2, title: 'a week later', data: { value: () => dayjs().add(1, 'week') } },
  ]);
});

watch(
  () => props.value,
  v => handleCache.set([v])
);

const computedTriggerText = computed(() => {
  const v = props.value;
  return v ? dayjs(Number(v)).format('YYYY-MM-DD HH:mm:ss') : '';
});

const computedCacheText = computed(() => {
  const v = cache.value[0];
  return v ? dayjs(Number(v)).format('YYYY-MM-DD HH:mm:ss') : '';
});

const computedServiceList = computed(() => {
  const func = ({ id, title, data }: any) => ({ id, label: title, value: data.value });
  return service.list.map(func);
});

const datePickerEventsOk = (_dateStr: string, date: Date) => {
  const v = String(date.valueOf());
  emits('update:value', v);
};
const datePickerEventsSelect = (_dateStr: string, date: Date) => {
  const v = String(date.valueOf());
  handleCache.set([v]);
};
const datePickerEventsSelectShortcut = (shortcut: any) => {
  const v = String(dayjs(shortcut.value()).valueOf());
  emits('update:value', v);
};
</script>

<template>
  <dz-popover :payload="{ embed: true }">
    <TriggerText :payload="{ ...payload }" :text="computedTriggerText" :value="value" @reset="methods.reset" />

    <template #body>
      <v s="w-grow h-fit">
        <CacheText :payload="{ ...payload }" :value="computedCacheText" />
        <dz-popover :payload="{ tooltip: '自定义选择时间后 需要点击确认' }">
          <dz-btn v-if="!value && !cache.value[0]" icon="mdi:information-outline" />
          <dz-btn v-else-if="value !== cache.value[0]" class="text-red-500" icon="mdi:information-outline" />
          <dz-btn v-else icon="mdi:check" />
        </dz-popover>
      </v>

      <DatePicker
        ref="el"
        :showTime="!payload.hiddenTime"
        :allowClear="false"
        :popupVisible="true /* bug : 时间滚动效果 */"
        :hide-trigger="true"
        shortcutsPosition="right"
        :shortcuts="computedServiceList"
        :modelValue="Number(value)"
        @update:pickerValue="datePickerEvents.updatePickerValue"
        @update:modelValue="datePickerEvents.updateModelValue"
        @change="datePickerEvents.change"
        @select="datePickerEventsSelect"
        @popupVisibleChange="datePickerEvents.popupVisibleChange"
        @ok="datePickerEventsOk"
        @clear="datePickerEvents.clear"
        @selectShortcut="datePickerEventsSelectShortcut"
        @pickerValueChange="datePickerEvents.pickerValueChange"
      />
    </template>
  </dz-popover>
</template>
