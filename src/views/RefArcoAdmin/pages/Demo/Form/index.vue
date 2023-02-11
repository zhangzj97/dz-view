<script setup lang="ts">
import { schemaForm } from './schemas';

const data = reactive({});
</script>

<template>
  <dz-view col size="h-grow">
    <dz-view one>
      <dz-font>Page Tab</dz-font>
    </dz-view>

    <dz-view one size="h-grow">
      <dz-form :schema="schemaForm" :dataModel="data" :moduleName="'Demo/Form'" />
    </dz-view>
  </dz-view>
</template>
