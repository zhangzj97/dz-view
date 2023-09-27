<script setup lang="ts">
defineOptions({ name: 'ControlSqlField' });

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
      <label
        v-for="(item, index) of service.list"
        :key="index"
        class="flex h-fit w-fit"
        :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
      >
        <input
          type="radio"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          :name="code"
          :value="String(item.value)"
          :checked="modelValue === String(item.value)"
          :disabled="item.disabled"
          @input="CommonEvent.onInput"
        />
        <v-text :text="item.title" />
      </label>
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.refreshService">
      <v-icon v="8-50" icon="mdi:refresh" />
    </v>
    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </PluginControl>
</template>
