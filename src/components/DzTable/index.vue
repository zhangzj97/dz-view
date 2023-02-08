<script setup lang="ts">
import TableVxe from './components/TableVxe/index.vue';

import { useSchemaTable } from './hooks/useSchemaTable';

const props = defineProps<{
  schema?: any[] | any;
  baseList?: any[];
  tableConfig?: any;
  moduleName?: string;
}>();

const { fixSchema } = useSchemaTable({ moduleName: props.moduleName });

const tableSchemaState = reactive<any>({
  raw: null,
  cleaned: [],
});

onMounted(() => {
  tableSchemaState.raw = props.schema;
  tableSchemaState.cleaned = props.schema.map(fixSchema);
});
</script>

<template>
  <TableVxe :schema="tableSchemaState.cleaned" :baseList="baseList" :moduleName="moduleName" :tableConfig="tableConfig" />
</template>
