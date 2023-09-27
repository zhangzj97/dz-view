<script setup lang="ts">
defineOptions({ name: 'ControlPassword' });

import ControlWrapper from '../ControlWrapper.vue';

import type { ControlProps, ControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<ControlProps<Option>>(), {});
const emits = defineEmits<ControlEmits & Event>();

const { isNull, isString, isNumber, isBoolean } = useValidate();
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

onMounted(() => emits('update:value', null));

const step01 = async () => {
  await emits('update:value', !isNull(getValue()) ? String(Number(getValue()) - 1) : String(-1));
  ExposeMethod.validate({ error: true });
};

const step02 = async () => {
  await emits('update:value', !isNull(getValue()) ? String(Number(getValue()) + 1) : String(+1));
  ExposeMethod.validate({ error: true });
};

const onInput = async el => {
  if (el.target.value === '') {
    await emits('update:value', null);
  } else {
    await emits('update:value', el.target.value);
  }
};
</script>

<template>
  <ControlWrapper :state="state" :validator="validator" v-bind="ExposeMethod">
    <input
      ref="pluginDom"
      :class="[
        'w-full h-fit',
        'dz-plugin-control-input',
        state?.error && 'dz-plugin-control-input--error',
        state?.disabled && 'dz-plugin-control-input--disabled',
      ]"
      type="number"
      :disabled="state.disabled"
      :value="modelValue"
      @input="onInput"
      @focus="CommonEvent.onFocus"
      @blur="CommonEvent.onBlur"
    />

    <!-- prettier-ignore -->
    <v s="w-fit h-fit" v="mouse-gray" @click="step01" >
      <v-icon v="8-50" icon="mdi:minus-box-outline" />
    </v>
    <!-- prettier-ignore -->
    <v s="w-fit h-fit" v="mouse-gray" @click="step02">
      <v-icon v="8-50" icon="mdi:plus-box-outline" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </ControlWrapper>
</template>
