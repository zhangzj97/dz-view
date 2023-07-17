<script setup lang="ts">
defineOptions({ name: 'ControlInput' });

import PluginControl from '../../../components/PluginControl.vue';

import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emits = defineEmits<DzPluginControlEmits & Event>();

const { isString, isNumber, isBoolean } = useValidate();
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
</script>

<template>
  <PluginControl :state="state" :validator="validator" v-bind="ExposeMethod">
    <input
      ref="pluginDom"
      :class="[
        'w-full h-fit',
        'dz-plugin-control-input',
        state?.error && 'dz-plugin-control-input--error',
        state?.disabled && 'dz-plugin-control-input--disabled',
      ]"
      type="text"
      :disabled="state.disabled"
      :value="modelValue"
      @input="CommonEvent.onInput"
      @focus="CommonEvent.onFocus"
      @blur="CommonEvent.onBlur"
    />

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </PluginControl>
</template>
