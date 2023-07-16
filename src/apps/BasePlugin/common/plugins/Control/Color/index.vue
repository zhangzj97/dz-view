<script setup lang="ts">
import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emit = defineEmits<DzPluginControlEmits & Event>();

import PluginControl from '../../../components/PluginControl.vue';

const { isString, isNumber, isBoolean } = useValidate();
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (isString(value) || isNumber(value) || isBoolean(value)) {
    newValue = String(value);
  }
  emit('update:value', newValue);
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({
  props,
  emit,
  getValue,
  setValue,
});
defineExpose({ ...ExposeMethod });

onMounted(() => {
  emit('update:value', null);
});
</script>

<template>
  <PluginControl :state="state" :validator="validator">
    <input
      ref="pluginDom"
      :class="[
        'w-24 h-8',
        'dz-plugin-control-input',
        state?.error && 'dz-plugin-control-input--error',
        state?.disabled && 'dz-plugin-control-input--disabled',
      ]"
      type="color"
      :disabled="state.disabled"
      :value="modelValue"
      @input="CommonEvent.onInput"
      @focus="CommonEvent.onFocus"
      @blur="CommonEvent.onBlur"
    />
    <v-space s="w-2 h-grow" />
    <v-text :text="modelValue || 'No Color'" />
  </PluginControl>
</template>

<style lang="scss">
@import url(../../../assets/index.scss);
</style>
