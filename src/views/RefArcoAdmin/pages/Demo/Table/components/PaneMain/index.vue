<script setup lang="ts">
import { schemaTable } from './schemas';
</script>

<template>
  <dz-view col size="h-grow">
    <dz-view one>
      <dz-font>Page Tab</dz-font>
    </dz-view>

    <dz-view one size="h-grow">
      <dz-page-table :schemaTable="schemaTable"> </dz-page-table>
    </dz-view>
  </dz-view>
</template>
