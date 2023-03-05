<script setup lang="ts">
import { useService } from '@/hooks/useService';

const { dispatch } = useService();

const props = defineProps<{
  schemaSearch?: any;
  schemaTable: any;

  moduleName: any;
}>();

const tableState = reactive<any>({
  list: [],
});

onMounted(() => {
  refresh();
});

const refresh = async () => {
  const { data } = await dispatch(`${props.moduleName}.Select`, {});
  tableState.list = data.list;
};
</script>

<template>
  <dz-view col size="h-grow">
    <dz-view one>
      <dz-font>Search form</dz-font>
    </dz-view>
    <dz-view one>
      <dz-font>Action bar</dz-font>
    </dz-view>
    <dz-view one size="h-grow">
      {{ tableState.list }}
      <dz-table :schema="schemaTable" :base-list="tableState.list" />
    </dz-view>
  </dz-view>
</template>
