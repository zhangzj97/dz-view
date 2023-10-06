<script setup lang="ts">
import dayjs from 'dayjs';

import { DatePicker } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

defineOptions({ name: 'ControlDatetime' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = useControlBase({ props, emits });

const getValue = (): string | string[] | null | any => {
  return props.value;
};
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.Number(value) || is.Number(Number(value))) {
    newValue = value;
  }
  emits('update:value', newValue);
};

defineExpose({ ...methods, getValue, setValue });

onMounted(() => {
  if (is.Undefined(getValue())) {
    setValue(null);
  }
});

const reset = () => {
  emits('update:value', null);
};

const pickerValue = value => {
  emits('update:value', String(dayjs(value).valueOf()));
};

const valueTime = computed(() => {
  if (is.Empty(getValue())) return null;
  return dayjs(Number(getValue()));
});

const triggerText = computed(() => {
  if (is.Empty(getValue())) return '';
  return dayjs(Number(getValue())).format('YYYY-MM-DD HH:mm:ss');
});
</script>

<template>
  <v s="w-grow h-fit" class="group">
    <DatePicker
      ref="el"
      :error="payload.error"
      :allowClear="false"
      shortcutsPosition="right"
      :pickerValue="valueTime"
      :shortcuts="[
        {
          label: '现在',
          value: () => dayjs(),
        },
      ]"
      :showTime="!payload.hiddenTime"
      @update:modelValue="pickerValue"
    >
      <input
        :class="[
          'w-grow h-8',
          'dz-plugin-control-input',
          payload.error && 'dz-plugin-control-input--error',
          payload.disabled && 'dz-plugin-control-input--disabled',
          'focus:outline-none',
          'pr-8',
        ]"
        type="text"
        :disabled="payload.disabled"
        :value="triggerText"
        :placeholder="payload.placeholder"
        @input="events.onInput"
        @focus="events.onFocus"
        @blur="events.onBlur"
      />

      <template #suffix-icon>
        <v-space />
      </template>
    </DatePicker>

    <v s="w-fit h-fit" class="absolute top-0 right-0">
      <dz-btn
        :class="['scale-90', 'group-hover:opacity-0', getValue() ? 'opacity-0' : 'opacity-90']"
        :payload="{ type: 'icon' }"
        icon="mdi:calendar-month-outline"
      />
    </v>
    <v s="w-fit h-fit" class="absolute top-0 right-0">
      <dz-btn
        :class="['scale-90', 'group-hover:opacity-80', getValue() ? 'opacity-50' : 'opacity-0']"
        icon="mdi:close-circle-outline"
        @click="reset"
      />
    </v>
  </v>
</template>
