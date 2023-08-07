<script setup lang="ts">
defineOptions({ name: 'ControlInput' });

import PluginControl from '../../../components/PluginControl.vue';

import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emits = defineEmits<DzPluginControlEmits & Event>();

const { isNull, isNumber, isBoolean } = useValidate();
const getValue = (): string | null => props.value;
const setValue = async (value: unknown) => {
  if (isNull(value)) {
    await emits('update:value', null);
    return;
  }
  if (isNull(getValue())) {
    await emits('update:value', {});
  }
  await emits('update:value', { ...props.value, ...value });
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({ props, emits, getValue, setValue }); // prettier-ignore

defineExpose({ ...ExposeMethod });

onMounted(() => emits('update:value', null));

const input01 = el => {
  emits('update:value', { ...(props.value || {}), field: el.target.value });
};

const input02 = el => {
  emits('update:value', { ...(props.value || {}), comment: el.target.value });
};
</script>

<template>
  <PluginControl :state="state" :validator="validator" v-bind="ExposeMethod">
    <input
      :class="['dz-plugin-control-input', 'w-32 h-6']"
      type="text"
      :disabled="state.disabled"
      :value="modelValue?.field"
      @input="input01"
    />
    <input
      :class="['dz-plugin-control-input', 'w-32 h-6']"
      type="text"
      :disabled="state.disabled"
      :value="modelValue?.comment"
      @input="input02"
    />

    <v
      v-for="(item, index) of service.list"
      :key="index"
      s="w-fit h-fit"
      v="mouse-gray"
      :class="[
        String(modelValue?.type) === String(item.value) && 'bg-blue-500',
      ]"
      @click="setValue({ type: String(item.value) })"
    >
      <v-icon v="8-50" :icon="item.data.icon" />
    </v>
  </PluginControl>
</template>
