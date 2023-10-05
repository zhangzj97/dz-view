<script setup lang="ts">
import 'jsoneditor';
import JsonEditorVue from 'json-editor-vue3';

defineOptions({ name: 'ControlJson' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = useControlBase({ props, emits });
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  newValue = value;
  emits('update:value', newValue);
};

defineExpose({ ...methods, getValue, setValue });

onMounted(() => setValue(null));

const onChange = (e: any) => {
  if (Object.prototype.toString.call(e) !== '[object Event]') {
    emits('update:value', e);
  }
};
</script>

<template>
  <v s="w-grow h-fit" class="group">
    <JsonEditorVue
      ref="el"
      :class="[]"
      class="plugin-control-json"
      currentMode="code"
      :modelValue="getValue()"
      language="zh-CN"
      @focus="events.onFocus"
      @blur="events.onBlur"
      @change="onChange"
    />

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

<style lang="scss">
.plugin-control-json.container {
  width: 100%;

  & .jsoneditor-poweredBy {
    visibility: hidden;
  }

  & .full-screen {
    right: 4px;
  }
}
</style>
