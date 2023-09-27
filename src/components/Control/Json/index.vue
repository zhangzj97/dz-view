<script setup lang="ts">
import 'jsoneditor';
import JsonEditorVue from 'json-editor-vue3';

defineOptions({ name: 'ControlJson' });

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
  // if (isString(value) || isNumber(value) || isBoolean(value)) {
  //   newValue = String(value);
  // }
  newValue = value;
  emits('update:value', newValue);
};

const { pluginDom, ExposeMethod, CommonEvent, modelValue } = usePluginControl({ props, emits, getValue, setValue }); // prettier-ignore

defineExpose({ ...ExposeMethod });

onMounted(() => emits('update:value', null));

const { debug } = useLog({ module: 'test', color: 'blue' });

const onChange = e => {
  if (Object.prototype.toString.call(e) !== '[object Event]') {
    emits('update:value', e);
  }
};
</script>

<template>
  <ControlWrapper :state="state" :validator="validator" v-bind="ExposeMethod">
    <json-editor-vue
      :class="[option.bodyClass]"
      class="plugin-raw-control-json"
      :modelValue="modelValue"
      currentMode="code"
      language="zh-CN"
      @focus="CommonEvent.onFocus"
      @blur="CommonEvent.onBlur"
      @change="onChange"
    />

    <v s="w-fit h-fit" v="mouse-gray" @click="ExposeMethod.reset">
      <v-icon v="8-50" icon="mdi:close-circle-outline" />
    </v>
  </ControlWrapper>
</template>

<style lang="scss">
.plugin-raw-control-json.container {
  width: 100%;

  & .jsoneditor-poweredBy {
    visibility: hidden;
  }

  & .full-screen {
    right: 4px;
  }
}
</style>
