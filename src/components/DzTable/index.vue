<script setup lang="ts">
defineOptions({ name: 'DzTable' });

import { AgGridVue } from 'ag-grid-vue3'; // the AG Grid Vue Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import type { DzTableComponentProps, DzViewStateProps } from '@/types/dz-view';
interface Props {
  state?: DzViewStateProps;
  schema: any;
  data: any;
}
const props = withDefaults(defineProps<DzTableComponentProps & Props>(), {});
const emits = defineEmits<{
  'ready:table': [value: any];
}>();

const schemaListRead = computed(() => {
  return props.schema?.list || [];
});

const dataListRead = computed(() => {
  return props.data?.list || [];
});

const schemaConfigRead = computed(() => {
  const defaultColDef = {
    initialWidth: 100,
    sortable: true,
    resizable: true,
    filter: true,
  };
  return (
    props.schema?.cofig && {
      ...props.schema?.cofig,
      ...defaultColDef,
    }
  );
});

const columnTypes = {
  editable: { editable: true },
};

const onGridReady = ({ api }: any) => {
  console.log(props.schema);
  props.schema.api = api;
  console.log(api.selectAll);
};

const onRowSelected = event => {
  console.log('row ' + event.node.data.id + ' selected = ' + event.node.isSelected());
};
</script>

<template>
  <v :s="s" :w="w">
    <AgGridVue
      class="dz-tabl ag-theme-alpine"
      :class="['w-full h-full']"
      :columnDefs="schemaListRead"
      :rowData="dataListRead"
      :defaultColDef="schemaConfigRead"
      rowSelection="multiple"
      animateRows="true"
      :columnTypes="columnTypes"
      @gridReady="onGridReady"
      @row-selected="onRowSelected"
    >
    </AgGridVue>
  </v>
</template>
