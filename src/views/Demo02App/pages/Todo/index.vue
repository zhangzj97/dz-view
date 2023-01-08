<script setup lang="ts" name="Todo">
import PaneSearchForm from './components/PaneSearchForm/index.vue';
import PaneTodoList from './components/PaneTodoList/index.vue';
</script>

<template>
  <!-- <dz-flex test-title="Todo"></dz-flex> -->
  <dz-row class="overflow-auto w-grow">
    <dz-row-item class="bg-PageToDoList bg-page" />

    <dz-row-item class="w-64">
      <dz-row row-item class="h-grow">
        <dz-flex test-title="PaneSearchForm"></dz-flex>
      </dz-row>
    </dz-row-item>
    <dz-row-item class="w-grow">
      <PaneTodoList />
    </dz-row-item>
  </dz-row>
</template>
