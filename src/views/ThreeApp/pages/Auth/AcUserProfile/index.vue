<script setup lang="ts">
import { useService } from '@/hooks/useService';
const { dispatch } = useService();

const schemaTable = [
  { key: 'id', component: 'Input' },
  { key: 'avatar' },
  { key: 'remark' },
  { key: 'createTime' },
  { key: 'updateTime' },
  { key: 'deleteTime' },
  { key: 'createUserId' },
  { key: 'updateUserId' },
  { key: 'deleteUserId' },
  { key: 'version' },
  { key: 'createUser' },
  { key: 'updateUser' },
  { key: 'deleteUser' },
  { key: 'idList' },
  { key: 'createUserIdList' },
  { key: 'updateUserIdList' },
  { key: 'deleteUserIdList' },
  { key: 'keyword' },
  { key: 'createTimeRange' },
  { key: 'updateTimeRange' },
  { key: 'deleteTimeRange' },
  { key: 'userId' },
  { key: 'userIdList' },
  { key: 'user' },
  { key: 'bio' },
  { key: 'nickname' },
  { key: 'phoneOther' },
  { key: 'emailOther' },
];

const dataState = reactive({
  list: [],
});

const moduleState = reactive({
  name: 'Auth/AcUserProfile',
});

const pageState = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
});

const updatePage = () => {
  refresh();
};

const updatePageSize = () => {
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
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
      <dz-button @click="Option" title="Option" />
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
        @update:current="updatePage"
        :pageSize="pageState.pageSize"
        @update:pageSize="updatePageSize"
        show-size-changer
        :total="pageState.total"
      />
    </dz-view>
  </dz-view>
</template>
