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

const option = reactive({
  labelAndFormItemSize: 'h-fit w-full',
  labelAndFormItemLayout: 'row',
  labelAndFormItemPosition: '6', // unuseless

  labelSize: 'w-48 h-12',
  labelLayout: 'one', // unuseless
  labelPosition: '3',

  formItemSize: 'w-grow h-12',
  formItemLayout: 'one', // unuseless
  formItemPosition: '4', // unuseless

  ...props.option,
});

const { fixSchema } = useSchemaForm({ moduleName: props.moduleName, option });

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
  <FormDz :schema="schemaState.cleaned" :baseList="baseList" :dataModel="dataModel" :moduleName="moduleName" :option="option" :key="schemaState.version" />
</template>
