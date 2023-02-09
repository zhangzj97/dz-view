<script setup lang="ts">
import TableVxe from './components/TableVxe/index.vue';

import { useSchemaTable } from './hooks/useSchemaTable';

const props = defineProps<{
  schema?: any[] | any;
  baseList?: any[];
  dataModel?: any;
  option?: any;
  moduleName?: string;
  className?: string;
}>();

const option = reactive({
  ...props.option,
});

const { fixSchema } = useSchemaTable({ moduleName: props.moduleName, option });

const schemaState = reactive<any>({
  raw: null,
  cleaned: [],
});

onMounted(() => {
  schemaState.raw = props.schema;
  schemaState.cleaned = props.schema.map(fixSchema);
});
</script>

<template>
  <TableVxe :schema="schemaState.cleaned" :baseList="baseList" :dataModel="dataModel" :moduleName="moduleName" :option="option" />
</template>
