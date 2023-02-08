<script setup lang="ts">
defineProps<{
  schemaSearch?: any;
  schemaTable?: any;
  moduleName?: any;
}>();

const tableState = reactive<any>({
  list: [],
});

onMounted(() => {
  refresh();
});

const refresh = async () => {
  tableState.list = [
    { id: 11, index: 'No11', time: '1675756298092', date: '1675756298092', datetime: '1675756298092' },
    { id: 12, index: 'No12', time: '1625756298092', date: '1625756298092', datetime: '1625756298092' },
    { id: 13, index: 'No13', time: '1635756298092', date: '1635756298092', datetime: '1635756298092' },
    { id: 14, index: 'No14', time: '1645756298092', date: '1645756298092', datetime: '1645756298092' },
  ];
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
      <dz-table :schema="schemaTable" :base-list="tableState.list" />
    </dz-view>
  </dz-view>
</template>
