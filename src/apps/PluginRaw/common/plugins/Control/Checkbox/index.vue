<script setup lang="ts">
defineOptions({ name: 'ControlCheckbox' });

import PluginControl from '../../../components/PluginControl.vue';

import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
import { isNull } from 'lodash';
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emits = defineEmits<DzPluginControlEmits & Event>();

const { isArray } = useValidate();
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (isArray(value)) {
    newValue = value.map(item => String(item));
  }
  emits('update:value', newValue);
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({ props, emits, getValue, setValue }); // prettier-ignore

defineExpose({ ...ExposeMethod });

const onInput = async el => {
  if (isNull(getValue())) {
    await emits('update:value', []);
  }
  let v = [...getValue()];
  if (v.includes(el.target.value)) {
    v = v.filter(item => item !== el.target.value);
  } else {
    v.push(el.target.value);
  }
  await emits('update:value', v);
};

onMounted(() => emits('update:value', null));
</script>

<template>
  <PluginControl :state="state" :validator="validator" v-bind="ExposeMethod">
    <v s="w-grow h-fit" grid w="gap-1">
      <v v-for="(item, index) of service.list" :key="index" s="w-fit h-8">
        <input
          type="checkbox"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          :id="`${code}__${String(item.value)}`"
          :name="code"
          :value="String(item.value)"
          :checked="modelValue?.includes(String(item.value))"
          :disabled="item.disabled"
          @input="onInput"
        />
        <label
          :for="`${code}__${String(item.value)}`"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
        >
          {{ item.title }}
        </label>
      </v>
    </v>
    <v s="w-fit h-fit" v="mouse-gray" @click="setValue([])">
      <v-icon v="8-50" icon="mdi:close-circle" />
    </v>
    <v s="w-fit h-fit" v="mouse-gray" @click="setValue(null)">
      <v-icon v="8-50" icon="mdi:close-circle" />
    </v>
    <v s="w-16 h-fit">
      <template v-if="modelValue">{{ modelValue }}</template>
      <v-text v-else text="No Data" />
    </v>
  </PluginControl>
</template>
