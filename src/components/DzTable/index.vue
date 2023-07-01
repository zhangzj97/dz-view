<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3'; // the AG Grid Vue Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

defineProps<{
  // Size Css
  // size: string;
  s?: string;
  // Wrap Css
  w?: string;
  // Text Css
  t?: string;

  // Text
  text?: string;

  // Flex Css
  // row?: boolean;
  // col?: boolean;

  // Hover Css
  hover?: string;

  // Position Css
  // absolute?: boolean;

  // Cursor Css
  pointer?: boolean;

  // Test and demo
  desc?: string;
}>();

const schema = reactive({
  list: [{ field: 'make' }, { field: 'model' }, { field: 'price' }],

  config: {
    sortable: true,
    filter: true,
    flex: 1,
  },
});

const data = reactive({
  list: [
    { make: 1, model: 2, price: '123' },
    { make: 11, model: 2, price: '123' },
    { make: 12, model: 2, price: '123' },
    { make: 13, model: 2, price: '123' },
  ],
});

// DefaultColDef sets props common to all Columns
const schemaConfigState = reactive();
</script>

<template>
  <v :s="s" :w="w">
    <AgGridVue
      class="ag-theme-alpine"
      :class="['w-full h-full']"
      :columnDefs="schema.list"
      :rowData="data.list"
      :defaultColDef="schema.config"
      rowSelection="multiple"
      animateRows="true"
    >
    </AgGridVue>
  </v>
</template>
