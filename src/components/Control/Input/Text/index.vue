<script setup lang="ts">
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
  <input
    ref="el"
    :class="[
      'w-full h-8',
      'dz-plugin-control-input',
      state?.error && 'dz-plugin-control-input--error',
      state?.disabled && 'dz-plugin-control-input--disabled',
    ]"
    type="text"
    :disabled="state?.disabled"
    :readonly="true"
    :value="getValue()"
    @input="events.onInput"
    @focus="events.onFocus"
    @blur="events.onBlur"
  />

  <v s="w-fit h-fit" v="mouse-gray" @click="methods.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
