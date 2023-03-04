<script setup lang="ts">
import { mock } from './mocks';
import { schema } from './schemas';
import { useService } from '@/hooks/useService';
const { dispatch } = useService();

const schemaTable = schema.table;

const dataState = reactive({
  list: mock.tableList,
});

const moduleState = reactive({ name: 'Demo/Table' });

const pageState = reactive({ page: 0, pageSize: 0, total: 0 });

onMounted(() => {
  pageState.page = 1;
  pageState.pageSize = 10;
});

const updatePage = (value: number) => {
  pageState.page = value;
  refresh();
};

const updatePageSize = (value: number) => {
  pageState.pageSize = value;
  refresh();
};

const refresh = async () => {
  const payload = {
    pageinfo: {
      page: pageState.page,
      pageSize: pageState.pageSize,
    },
  };
  const { data } = await dispatch(`${moduleState.name}.Select`, payload);
  dataState.list = data.list;
  pageState.page = data.page;
  pageState.pageSize = data.pageSize;
  pageState.total = data.total;
};

const Find = () => dispatch(`${moduleState.name}.Find`, {});
const FindDraft = () => dispatch(`${moduleState.name}.FindDraft`, {});
const FindRecycle = () => dispatch(`${moduleState.name}.FindRecycle`, {});
const Select = async () => {
  const payload = {
    pageinfo: {
      page: pageState.page,
      pageSize: pageState.pageSize,
    },
  };
  const { data } = await dispatch(`${moduleState.name}.Select`, payload);
  dataState.list = data.list;
  pageState.page = data.page;
  pageState.pageSize = data.pageSize;
  pageState.total = data.total;
};
const SelectRecycle = () => dispatch(`${moduleState.name}.SelectRecycle`, {});
const Create = () => dispatch(`${moduleState.name}.Create`, {});
const CreateDraft = () => dispatch(`${moduleState.name}.CreateDraft`, {});
const Update = () => dispatch(`${moduleState.name}.Update`, {});
const Delete = () => dispatch(`${moduleState.name}.Delete`, {});
const Restore = () => dispatch(`${moduleState.name}.Restore`, {});
const DeleteHard = () => dispatch(`${moduleState.name}.DeleteHard`, {});
const Option = () => dispatch(`${moduleState.name}.Option`, {});
</script>

<template>
  <dz-view col size="h-grow" wrapper-class="p-2 bg-white border shadow-lg">
    <dz-font lg>{{ moduleState.name }}</dz-font>
    <dz-view size="h-fit" grid wrapper-class="w-0 gap-1">
      <dz-button @click="Find" title="Find" />
      <dz-button @click="FindDraft" title="FindDraft" />
      <dz-button @click="FindRecycle" title="FindRecycle" />
      <dz-button @click="Select" title="Select" />
      <dz-button @click="SelectRecycle" title="SelectRecycle" />
      <dz-button @click="Create" title="Create" />
      <dz-button @click="CreateDraft" title="CreateDraft" />
      <dz-button @click="Update" title="Update" />
      <dz-button @click="Delete" title="Delete" />
      <dz-button @click="Restore" title="Restore" />
      <dz-button @click="DeleteHard" title="DeleteHard" />
      <dz-button @click="Option" title="Option" />
    </dz-view>

    <dz-view size="h-grow" col wrapper-class="w-0 p-0">
      <dz-table
        :moduleName="moduleState.name"
        :schema="schemaTable"
        :baseList="dataState.list"
      />
    </dz-view>

    <dz-view size="h-fit" col wrapper-class="w-0 p-0">
      <a-pagination
        :current="pageState.page"
        :pageSize="pageState.pageSize"
        show-size-changer
        :total="pageState.total"
        @update:pageSize="updatePageSize"
        @update:current="updatePage"
      />
    </dz-view>
  </dz-view>
</template>
