<script setup lang="ts">
defineOptions({ name: 'ControlPassword' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{ isText: boolean }>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = useControlBase({ props, emits });

const getValue = (): string | null | any => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

defineExpose({ ...methods, getValue, setValue });

onMounted(() => setValue(null));
</script>

<template>
  <v s="w-grow h-fit" class="group">
    <input
      ref="el"
      :class="[
        'w-grow h-8',
        'dz-plugin-control-input',
        payload.error && 'dz-plugin-control-input--error',
        payload.disabled && 'dz-plugin-control-input--disabled',
        'focus:outline-none',
        'pr-16',
      ]"
      :type="payload.isText ? 'text' : 'password'"
      :disabled="payload.disabled"
      :value="getValue()"
      :placeholder="payload.placeholder"
      @input="events.onInput"
      @focus="events.onFocus"
      @blur="events.onBlur"
    />

    <v s="w-fit h-fit" class="absolute top-0 right-0">
      <dz-btn
        v-if="payload.isText"
        :class="['scale-90', 'opacity-0 group-hover:opacity-80', getValue() && 'opacity-50']"
        icon="mdi:eye-off-outline"
        @click="methods.setPayload({ isText: false })"
      />
      <dz-btn
        v-else
        :class="['scale-90', 'opacity-0 group-hover:opacity-80', getValue() && 'opacity-50']"
        icon="mdi:eye-outline"
        @click="methods.setPayload({ isText: true })"
      />

      <dz-btn
        :class="['scale-90', 'opacity-0 group-hover:opacity-80', getValue() && 'opacity-50']"
        icon="mdi:close-circle-outline"
        @click="methods.reset"
      />
    </v>
  </v>
</template>
