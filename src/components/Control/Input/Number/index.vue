<script setup lang="ts">
import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits & {}>();

const { is } = useValidate();
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value) || is.Boolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

const { el, exposeMethod, commonEvent } = usePluginControl({ props, emits });
defineExpose({ ...exposeMethod, getValue, setValue });

onMounted(() => setValue(null));

const step01 = async () => {
  await emits('update:value', !is.Null(getValue()) ? String(Number(getValue()) - 1) : String(-1));
  exposeMethod.validate({ error: true });
};

const step02 = async () => {
  await emits('update:value', !is.Null(getValue()) ? String(Number(getValue()) + 1) : String(+1));
  exposeMethod.validate({ error: true });
};
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
    type="number"
    :disabled="state?.disabled"
    :value="getValue()"
    @input="commonEvent.onInput"
    @focus="commonEvent.onFocus"
    @blur="commonEvent.onBlur"
  />

  <v s="w-fit h-fit" v="mouse-gray" @click="step01">
    <v-icon v="8-50" icon="mdi:minus-box-outline" />
  </v>
  <v s="w-fit h-fit" v="mouse-gray" @click="step02">
    <v-icon v="8-50" icon="mdi:plus-box-outline" />
  </v>

  <v s="w-fit h-fit" v="mouse-gray" @click="exposeMethod.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
