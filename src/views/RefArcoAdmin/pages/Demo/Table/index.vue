<script setup lang="ts">
// import { schemaTableTime } from './schemas';

const schemaTableTime = reactive([]);
</script>

<template>
  <dz-view col size="h-grow">
    <dz-view one>
      <dz-font>Page Tab</dz-font>
    </dz-view>

    <dz-view one size="h-grow">
      <dz-page-table :schemaTable="schemaTableTime" :moduleName="'Demo/Table'" />
    </dz-view>
  </dz-view>
</template>
