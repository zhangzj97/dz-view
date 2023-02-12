<script setup lang="ts">
import FormDz from './components/FormDz/index.vue';

import { useSchemaForm } from './hooks/useSchemaForm';

const props = defineProps<{
  schema?: any[] | any;
  baseList?: any[];
  dataModel?: any;
  option?: any;
  moduleName?: string;
  className?: string;
}>();

const schemaOption = reactive({
  required: false,
  readonly: false,
  visible: true,

  cellOption: {},

  labelOption: {
    size: 'w-24 h-fit',
  },

  formItemOption: {
    layout: 'row',
    size: 'h-fit w-full',
  },

  controlOption: {
    size: 'w-grow h-fit',
  },

  pluginOption: {
    name: 'Input',
    type: 'Control',
    scope: '@Dz',
  },

  ...props.option,
});

const { fixSchema } = useSchemaForm({
  moduleName: props.moduleName,
  option: schemaOption,
});

const schemaState = reactive<any>({
  version: new Date().getTime(),
  raw: null,
  cleaned: [],
});

const refreshWhenSchemaUpdate = (value: any) => {
  schemaState.raw = value;
  schemaState.cleaned = props.schema.map(fixSchema);
  schemaState.version = new Date().getTime();
};
watch(() => props.schema, refreshWhenSchemaUpdate, { immediate: true });
</script>

<template>
  <FormDz
    :class="[
      //
    ]"
    :schema="schemaState.cleaned"
    :baseList="baseList"
    :dataModel="dataModel"
    :moduleName="moduleName"
    :option="option"
    :key="schemaState.version"
  />
</template>
