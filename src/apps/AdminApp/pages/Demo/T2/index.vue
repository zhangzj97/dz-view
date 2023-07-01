<script setup>
import 'ag-grid-community/styles/ag-grid.css';
import { AgGridVue } from 'ag-grid-vue3'; // the AG Grid Vue Component

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = params => {
  gridApi.value = params.api;
};

const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [{ field: 'make' }, { field: 'model' }, { field: 'price' }],
});
// DefaultColDef sets props common to all Columns
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1,
};
// Example load data from server
onMounted(() => {
  fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(remoteRowData => (rowData.value = remoteRowData));
});

const cellWasClicked = event => {
  // Example of consuming Grid Event
  console.log('cell was clicked', event);
};
const deselectRows = () => {
  gridApi.value.deselectAll();
};
</script>

<template>
  <dz-table s="w-grow h-grow" />
</template>
