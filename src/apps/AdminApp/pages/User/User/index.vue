<script setup lang="ts">
const { dispatch, Service, payload } = useService();

onMounted(() => {
  featSelectRefresh();
});

const featSelectRefresh = async () => {
  const pl = payload(null, {}, { page: { pageNum: 1, pageSize: 10 } });
  const { data } = await dispatch(Service.User.query)(pl);
  tableState.data.list = data.list;
};

const featSaveMock = async () => {
  const pl = payload(null, {
    remark: 'mock',
  });
  await dispatch(Service.User.save)(pl);

  await featSelectRefresh();
};

const featSelectAll = () => {
  tableState.api.selectAll();
};

const tableState = reactive<any>({
  data: { list: [] },
  schema: {
    list: [
      {
        field: '_selector1',
        headerName: '',
        maxWidth: 56,
        initialPinned: 'left',
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        field: '_selector1',
        headerName: 'No.',
        maxWidth: 100,
      },

      {
        field: 'id',
      },
      { field: 'remark', initialPinned: 'right' },
      { field: 'createUserId', initialPinned: 'left' },
      { field: 'createTime' },
      { field: 'updateUserId' },
      { field: 'updateTime' },
      { field: 'updateVersion' },
      { field: 'deleteFlag' },
      { field: 'userProfile' },
      { field: 'userProfileLink' },
      { field: 'userSecurity' },
      { field: 'userSecurityLink' },
      { field: 'role' },
      { field: 'roleLink' },
      { field: 'uuid' },
      { field: 'username' },
      { field: 'password' },
      { field: 'salt' },
      { field: 'lastLoginIp' },
      { field: 'lastLoginTime' },
      { field: 'lastChangePwdTime' },
    ],
  },
});

const { bind } = useForm();
</script>

<template>
  <v s="w-grow h-grow" w="p-4 m-2 gap-2" class="card-lg" col text="Card01">
    <v s="w-grow h-fit" text="Filter01"></v>
    <v s="w-grow h-fit" w="gap-2">
      <dz-btn title="刷新" @click="featSelectRefresh" />
      <dz-btn title="新增-1" @click="featSaveMock" />
      <dz-btn title="新增-Draft-2" />
      <dz-btn title="修改" />
      <dz-btn title="删除" />
      <dz-btn title="回收站" />
      <dz-btn title="选中值" />
      <dz-btn title="全部选中" @click="featSelectAll" />
    </v>
    <dz-table s="w-grow h-grow" v-bind="tableState" @ready-table="tableState.onReadyTable" />
  </v>
</template>

<style>
.ag-theme-alpine {
  --ag-grid-size: 3px;
  --ag-list-item-height: 20px;
}
.ag-theme-alpine {
  /* bright green, 10% opacity */
  --ag-selected-row-background-color: #e0e0e0;
}
</style>
