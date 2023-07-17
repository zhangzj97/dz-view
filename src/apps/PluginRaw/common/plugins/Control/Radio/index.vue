<script setup lang="ts">
defineOptions({ name: 'ControlCheckbox' });

import PluginControl from '../../../components/PluginControl.vue';

import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emits = defineEmits<DzPluginControlEmits & Event>();

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
</script>

<template>
  <PluginControl :state="state" :validator="validator" v-bind="ExposeMethod">
    <v s="w-grow h-fit" grid w="gap-1">
      <v v-for="(item, index) of service.list" :key="index" s="w-fit h-8">
        <input
          type="radio"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          :id="`${code}__${item.value}`"
          :name="code"
          :value="item.value"
          :checked="modelValue === item.value"
          :disabled="item.disabled"
          @input="CommonEvent.onInput"
        />
        <label
          :for="`${code}__${item.value}`"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
        >
          {{ item.title }}
        </label>
      </v>
    </v>
    <v s="w-fit h-fit" v="mouse-gray" @click="setValue(null)">
      <v-icon v="8-50" icon="mdi:close-circle" />
    </v>
    <v s="w-16 h-fit">
      <v-text :text="modelValue || 'No Data'" />
    </v>
  </PluginControl>
</template>
