<script setup lang="ts">
defineOptions({ name: 'ControlPassword' });

import ControlWrapper from '../ControlWrapper.vue';

import type { ControlProps, ControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<ControlProps<Option>>(), {});
const emits = defineEmits<ControlEmits & Event>();

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

const store = reactive({
  isText: false,
});
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
      :type="store.isText ? 'text' : 'password'"
      :disabled="state.disabled"
      :value="modelValue"
      @input="CommonEvent.onInput"
      @focus="CommonEvent.onFocus"
      @blur="CommonEvent.onBlur"
    />

    <!-- prettier-ignore -->
    <v v-if="store.isText" s="w-fit h-fit" v="mouse-gray" @click="store.isText = false" >
      <v-icon v="8-50" icon="mdi:eye-off-outline" />
    </v>
    <v v-else s="w-fit h-fit" v="mouse-gray" @click="store.isText = true">
      <v-icon v="8-50" icon="mdi:eye-outline" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </ControlWrapper>
</template>
