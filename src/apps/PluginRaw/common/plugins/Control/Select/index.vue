<script setup lang="ts">
defineOptions({ name: 'ControlCheckbox' });

import PluginControl from '../../../components/PluginControl.vue';

import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emits = defineEmits<DzPluginControlEmits & Event>();

const { isString, isNumber, isBoolean, isNull } = useValidate();
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (isString(value) || isNumber(value) || isBoolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({ props, emits, getValue, setValue }); // prettier-ignore

defineExpose({ ...ExposeMethod });

const onInput = async el => {
  if (el.target.value === '') {
    await emits('update:value', null);
  } else {
    await emits('update:value', el.target.value);
  }
};

onMounted(() => emits('update:value', null));
</script>

<template>
  <PluginControl :state="state" :validator="validator" v-bind="ExposeMethod">
    <v s="w-grow h-fit" grid w="gap-1">
      <select
        :class="[
          'w-full h-fit',
          'dz-plugin-control-select',
          state?.error && 'dz-plugin-control-select--error',
          state?.disabled && 'dz-plugin-control-select--disabled',
        ]"
        :name="code"
        :disabled="state?.disabled"
        @input="onInput"
      >
        <option value="" :selected="isNull(modelValue)">请选择</option>
        <option
          v-for="(item, index) of service.list"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          :key="index"
          :value="String(item.value)"
          :selected="modelValue === String(item.value)"
          :disabled="item.disabled"
        >
          {{ item.title }}
        </option>
      </select>
    </v>
    <v s="w-fit h-fit" v="mouse-gray" @click="setValue(null)">
      <v-icon v="8-50" icon="mdi:close-circle" />
    </v>
    <v s="w-16 h-fit">
      <v-text :text="modelValue || 'No Data'" />
    </v>
  </PluginControl>
</template>
