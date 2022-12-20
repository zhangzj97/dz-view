<script setup lang="ts" name="ConsoleRouter">
import type { RouteOption, SearchModel } from '../ConsoleRouter/types';
import { PaneListAll, PaneListSearch, PaneSearch } from './components';

import { useRouter, type RouteRecordRaw } from 'vue-router';
import { routeList } from './hooks/useRouteOption';

// ! Rote Option
// * routeState 路由数据 State
const routeState: { list: RouteOption[]; total: number } = reactive({ list: [], total: 0 });
// * refreshRouteList 刷新路由数据
const refreshRouteList = (list: RouteOption[]): void => {
  routeState.list = list;
  routeState.total = list.length;
};

// ! 搜索功能
// * searchState 搜索条件 State
const searchState: { keyword: string } = reactive({ keyword: '' });
// * searchByInput 输入中搜索
const searchByInput = (ev: Event, model: SearchModel): void => {
  searchState.keyword = model.keyword;
};
// * searchBySubmit 提交后搜索
const searchBySubmit = (ev: Event, model: SearchModel): void => {};
// * routeSearchList 搜索后的路由数据
const routeSearchList = computed(() => {
  return routeState.list.filter(({ label }) => label?.match(searchState.keyword));
});
// * routeSearchListLength 搜索后的路由数据总数
const routeSearchListLength = computed(() => routeSearchList.value.length);

// ! 跳转功能
const router = useRouter();
// linkTo
// Link route
const linkTo = (to: RouteRecordRaw): void => {
  router.push(to);
};
// * clickListItem
const clickListItem = (ev: Event, routeOption: RouteOption): void => {
  const { route } = routeOption.extra;
  linkTo(route);
};

// ! 初始化
onMounted(() => {
  refreshRouteList(routeList);
});
</script>

<template>
  <div class="flex flex-col relactive">
    <PaneSearch :list="routeState.list" :searchModel="searchState" @searchSubmit="searchBySubmit" @searchInput="searchByInput" />

    <template v-if="searchState.keyword">
      <PaneListSearch :list="routeSearchList" :total="routeSearchListLength" @clickListItem="clickListItem" />
    </template>
    <template v-if="!searchState.keyword">
      <PaneListAll :list="routeState.list" :total="routeState.total" @clickListItem="clickListItem" />
    </template>
  </div>
</template>
