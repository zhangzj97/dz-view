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

const { el, exposeMethod, commonEvent, option } = usePluginControl({ props, emits });
defineExpose({ ...exposeMethod, getValue, setValue });

onMounted(() => setValue(null));
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
    :type="option?.isText ? 'text' : 'password'"
    :disabled="state?.disabled"
    :value="getValue()"
    @input="commonEvent.onInput"
    @focus="commonEvent.onFocus"
    @blur="commonEvent.onBlur"
  />

  <v v-if="option?.isText" s="w-fit h-fit" v="mouse-gray" @click="exposeMethod.setOption({ isText: false })">
    <v-icon v="8-50" icon="mdi:eye-off-outline" />
  </v>

  <v v-else s="w-fit h-fit" v="mouse-gray" @click="exposeMethod.setOption({ isText: true })">
    <v-icon v="8-50" icon="mdi:eye-outline" />
  </v>

  <v s="w-fit h-fit" v="mouse-gray" @click="exposeMethod.reset">
    <v-icon v="8-50" icon="mdi:close-circle-outline" />
  </v>
</template>
