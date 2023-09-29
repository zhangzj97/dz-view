<script setup lang="ts">
defineOptions({ name: 'ControlHidden' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = usePluginControl({ props, emits });

const getValue = (): string => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value) || is.Boolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

defineExpose({ ...methods, getValue, setValue });

onMounted(() => setValue(null));
</script>

<template>
  <input
    ref="el"
    :class="[
      'w-full h-fit',
      'dz-plugin-control-input',
      payload.error && 'dz-plugin-control-input--error',
      payload.disabled && 'dz-plugin-control-input--disabled',
    ]"
    type="hidden"
    :disabled="true"
    :value="getValue()"
    @input="events.onInput"
    @focus="events.onFocus"
    @blur="events.onBlur"
  />

  <v v-if="false" s="w-fit h-fit" v="mouse-gray" @click="methods.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
