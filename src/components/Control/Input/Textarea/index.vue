<script setup lang="ts">
defineOptions({ name: 'ControlTextarea' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = usePluginControl({ props, emits });

const getValue = (): string => (!is.Empty(props.value) ? props.value : '');
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value) || is.Boolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

onMounted(() => setValue(null));

defineExpose({ ...methods, getValue, setValue });
</script>

<template>
  <textarea
    ref="el"
    :class="[
      'transition-none',
      'w-full h-fit',
      'dz-plugin-control-textarea',
      payload.error && 'dz-plugin-control-textarea--error',
      payload.disabled && 'dz-plugin-control-textarea--disabled',
    ]"
    type="text"
    :disabled="payload.disabled"
    :value="getValue()"
    @input="events.onInput"
    @focus="events.onFocus"
    @blur="events.onBlur"
  />
  <v s="w-fit h-fit" v="mouse-gray" @click="methods.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
