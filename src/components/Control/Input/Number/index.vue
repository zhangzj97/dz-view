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
  <input
    ref="el"
    :class="[
      'w-full h-8',
      'dz-plugin-control-input',
      payload.error && 'dz-plugin-control-input--error',
      payload.disabled && 'dz-plugin-control-input--disabled',
    ]"
    type="number"
    :disabled="payload.disabled"
    :value="getValue()"
    @input="events.onInput"
    @focus="events.onFocus"
    @blur="events.onBlur"
  />

  <v s="w-fit h-fit" v="mouse-gray" @click="step01">
    <v-icon v="8-50" icon="mdi:minus-circle-outline" />
  </v>
  <v s="w-fit h-fit" v="mouse-gray" @click="step02">
    <v-icon v="8-50" icon="mdi:plus-circle-outline" />
  </v>

  <v s="w-fit h-fit" v="mouse-gray" @click="methods.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
