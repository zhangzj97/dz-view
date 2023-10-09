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
const { el, methods, events, handleValue } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

const { datePickerEvents } = useDatePicker({ props });

onBeforeMount(async () => {
  await handleValue.set(props.payload.defaultValue || null);
  handleService.set([
    { id: 1, title: '现在', data: { value: () => dayjs() } },
    { id: 2, title: 'a week later', data: { value: () => dayjs().add(1, 'week') } },
  ]);
});

watch(
  () => props.value,
  v => handleCache.set(v)
);

const computedTriggerText = computed(() => {
  return props.value.map((item: any) => item && dayjs(Number(item)).format('YYYY-MM-DD HH:mm:ss')).join(' - ');
});

const computedCacheText = computed(() => {
  return cache.value.map((item: any) => item && dayjs(Number(item)).format('YYYY-MM-DD HH:mm:ss')).join(' - ');
});

const computedCacheValueFirst = computed(() => Number(cache.value[0]));

const computedServiceList = computed(() => {
  const func = ({ id, title, data }: any) => ({ id, label: title, value: data.value });
  return service.list.map(func);
});

const datePickerEventsOk = (_dateStr: string, date: Date) => {
  handleValue.set(String(date.valueOf()));
};
const datePickerEventsSelectWithCache = (_dateStr: string, date: Date) => {
  handleCache.set(String(date.valueOf()));
};

const datePickerEventsSelectShortcut = (shortcut: any) => {
  handleValue.set(String(dayjs(shortcut.value()).valueOf()));
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
      @reset="methods.clearNull"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
          <dz-popover :payload="{ tooltip: '自定义选择时间后 需要点击确认' }">
            <dz-btn v-if="!value && !cache.value[0]" icon="mdi:information-outline" />
            <dz-btn v-else-if="value !== cache.value[0]" title="确认" :payload="{ type: 'primary' }" @click="ok" />
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
          :modelValue="computedCacheValueFirst"
          @update:pickerValue="datePickerEvents.updatePickerValue"
          @update:modelValue="datePickerEvents.updateModelValue"
          @change="datePickerEvents.change"
          @select="datePickerEventsSelectWithCache"
          @popupVisibleChange="datePickerEvents.popupVisibleChange"
          @ok="datePickerEventsOk"
          @clear="datePickerEvents.clear"
          @selectShortcut="datePickerEventsSelectShortcut"
          @pickerValueChange="datePickerEvents.pickerValueChange"
        >
        </DatePicker>
      </v>
    </template>
  </dz-popover>
</template>

<style lang="scss" scoped>
:deep(.arco-picker-panel-wrapper > .arco-picker-footer) {
  height: 0px;
}
</style>
