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
  version: { code: '0', value: Date.now() },
  fixed: [],
});

const refreshWhenSchemaUpdate = async () => {
  schemaState.fixed = await rawToFixedSchema({ list: props.schema });
  schemaState.version = { code: '0', value: Date.now() };
};

watch(() => props.schema, refreshWhenSchemaUpdate, { immediate: true });
</script>

<template>
  <TableVxe
    :schema="schemaState.fixed"
    :baseList="baseList"
    :dataModel="dataModel"
    :moduleName="moduleName"
    :option="option"
  />
</template>
