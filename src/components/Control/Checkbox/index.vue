<script setup lang="ts">
defineOptions({ name: 'ControlCheckbox' });

import ControlWrapper from '../ControlWrapper.vue';

import type {ControlProps, ControlEmits } from '@/types/dz-view'; // prettier-ignore
import { isNull } from 'lodash';
type Option = any;
type Event = {};
const props = withDefaults(defineProps<ControlProps<Option>>(), {});
const emits = defineEmits<ControlEmits & Event>();

const { isArray } = useValidate();
const getValue = (): any => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (isArray(value)) {
    newValue = value.map(item => String(item));
  }
  emits('update:value', newValue);
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({ props, emits, getValue, setValue }); // prettier-ignore

defineExpose({ ...ExposeMethod });

const onInput = async (el: any) => {
  if (isNull(getValue())) {
    await emits('update:value', []);
  }
  let v = [...getValue()];
  if (v.includes(el.target.value)) {
    v = v.filter(item => item !== el.target.value);
  } else {
    v.push(el.target.value);
  }
  await emits('update:value', v);
};

onMounted(() => emits('update:value', null));
</script>

<template>
  <ControlWrapper :state="state" :validator="option.validator" v-bind="ExposeMethod">
    <v s="w-grow h-fit" grid w="gap-1">
      <label
        v-for="(item, index) of option.service.list"
        :key="index"
        class="flex w-fit h-fit"
        :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
      >
        <input
          type="checkbox"
          :class="[item.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          :name="code"
          :value="String(item.value)"
          :checked="modelValue?.includes(String(item.value))"
          :disabled="item.disabled"
          @input="onInput"
        />

        <v-text :text="item.title" />
      </label>
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.refreshService">
      <v-icon v="8-50" icon="mdi:refresh" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="setValue([])">
      <v-icon v="8-50" icon="mdi:code-brackets" />
    </v>

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </ControlWrapper>
</template>
