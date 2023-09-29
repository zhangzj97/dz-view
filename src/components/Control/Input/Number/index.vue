<script setup lang="ts">
defineOptions({ name: 'ControlNumber' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = usePluginControl({ props, emits });

const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value) || is.Boolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

defineExpose({ ...methods, getValue, setValue });

onMounted(() => setValue(null));

const step01 = async () => {
  await emits('update:value', !is.Null(getValue()) ? String(Number(getValue()) - 1) : String(-1));
  methods.validate({ error: true });
};

const step02 = async () => {
  await emits('update:value', !is.Null(getValue()) ? String(Number(getValue()) + 1) : String(+1));
  methods.validate({ error: true });
};
</script>

<template>
  <v s="w-grow h-fit" class="group">
    <dz-btn class="scale-90" icon="mdi:minus-circle-outline" @click="step01" />

    <input
      ref="el"
      :class="[
        'w-20 h-8',
        'dz-plugin-control-input',
        payload.error && 'dz-plugin-control-input--error',
        payload.disabled && 'dz-plugin-control-input--disabled',
        'focus:outline-none',
        'pr-3',
      ]"
      type="number"
      :disabled="payload.disabled"
      :value="getValue()"
      :placeholder="payload.placeholder"
      @input="events.onInput"
      @focus="events.onFocus"
      @blur="events.onBlur"
    />

    <dz-btn class="scale-90" icon="mdi:plus-circle-outline" @click="step02" />

    <dz-btn
      :class="['scale-90', 'opacity-0 scale-0', getValue() && 'opacity-50 scale-100']"
      icon="mdi:close-circle-outline"
      @click="methods.reset"
    />
  </v>
</template>
