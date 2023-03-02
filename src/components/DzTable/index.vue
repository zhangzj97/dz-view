<script setup lang="ts">
import TableVxe from './components/TableVxe/index.vue';

import { useSchemaTable } from './hooks/useSchemaTable';

const props = defineProps<{
  schema: any[] | any;
  baseList: any[];
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
    size: 'w-48 h-12',
  },

  formItemOption: {
    layout: 'row',
    size: 'h-fit w-full',
  },

  controlOption: {
    size: 'w-grow h-12',
  },

  pluginOption: {
    cellPluginCode: '@SourcePluginApp/CellText',
  },

  ...props.option,
});

const config = inject('config');
const { rawToFixedSchema } = useSchemaTable({
  moduleName: props.moduleName,
  option: schemaOption,
  config,
});

const schemaState = reactive<any>({
  version: new Date().getTime(),
  raw: null,
  fixed: [],
});

const refreshWhenSchemaUpdate = () => {
  schemaState.raw = props.schema;
  schemaState.fixed = rawToFixedSchema({ list: schemaState.raw });
  schemaState.version = new Date().getTime();
};

watch(() => props.schema, refreshWhenSchemaUpdate, { immediate: true });
</script>

<template>
  <TableVxe
    :class="[]"
    :schema="schemaState.fixed"
    :baseList="baseList"
    :dataModel="dataModel"
    :moduleName="moduleName"
    :option="option"
    :key="schemaState.version"
  />
</template>
