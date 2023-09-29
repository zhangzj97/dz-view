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
  <v s="w-grow h-fit" class="group">
    <textarea
      ref="el"
      :class="[
        'transition-none',
        'w-grow h-fit',
        'dz-plugin-control-textarea',
        payload.error && 'dz-plugin-control-textarea--error',
        payload.disabled && 'dz-plugin-control-textarea--disabled',
        'focus:outline-none',
        'pr-8',
        'opacity-0',
      ]"
      :style="{ backgroundColor: 'rgb(var(--gray-1))' }"
      type="text"
      :disabled="true"
      :value="getValue()"
      :placeholder="payload.placeholder"
      @input="events.onInput"
      @focus="events.onFocus"
      @blur="events.onBlur"
    ></textarea>

    <v s="w-fit h-fit" class="absolute top-0 right-0">
      <dz-btn
        v-if="false"
        :class="['scale-90', 'opacity-0 group-hover:opacity-80', getValue() && 'opacity-50']"
        icon="mdi:close-circle-outline"
        @click="methods.reset"
      />
    </v>
  </v>
</template>
