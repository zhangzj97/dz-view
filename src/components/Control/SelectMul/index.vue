<script setup lang="ts">
defineOptions({ name: 'ControlCheckbox' });

import ControlWrapper from '../ControlWrapper.vue';

import type { ControlProps, ControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<ControlProps<Option>>(), {});
const emits = defineEmits<ControlEmits & Event>();

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
  <ControlWrapper :state="state" :option="option" v-bind="ExposeMethod">
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
        multiple
        @input="onInput"
      >
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

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.refreshService">
      <v-icon v="8-50" icon="mdi:refresh" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="setValue([])">
      <v-icon v="8-50" icon="mdi:code-brackets" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </ControlWrapper>
</template>
