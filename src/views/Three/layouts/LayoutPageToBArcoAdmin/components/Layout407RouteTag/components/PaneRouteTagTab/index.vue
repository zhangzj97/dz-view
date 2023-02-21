<script setup lang="ts">
import PaneTagTab from './components/PaneTagTab/index.vue';

import { useRoute, useRouter } from 'vue-router';
import {
  useSourceRouteTabTagStore,
  useSourceRouteTabTagStateStore,
} from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();

const { version } = storeToRefs(useSourceRouteTabTagStore());
const { changeSelectedKeys } = useSourceRouteTabTagStateStore();
const { selectedKeys } = storeToRefs(useSourceRouteTabTagStateStore());

const refresh = () => {
  const { getSource } = useSourceRouteTabTagStore();
  const { list } = getSource();
  routeState.list = list;
};

const refreshRouteTabTagKey = () => {
  if (!route.meta.menu) return;
  const { id } = route.meta.menu as any;
  changeSelectedKeys({ selectedKeys: [String(id)] });
};

const routeState = reactive<any>({
  list: [],
  selectedKeys: [],
});

// 接收通知
watch(version, refresh);
watch(() => router.currentRoute.value.fullPath, refreshRouteTabTagKey);

// 初始化刷新
onMounted(async () => {
  refresh();
  refreshRouteTabTagKey();
});

const handleClick = (item: any) => {
  const { route } = item;
  router.push({ path: route });
};

const handleCloseUnactive = (item: any) => {
  const { code } = item;
  const { setSource, getSource, changeVersion } = useSourceRouteTabTagStore();
  let { list } = getSource();

  list = list.filter((item: any) => item.code !== code);
  const map = Object.fromEntries(list.map((item: any) => [item.id, item]));

  setSource({ list, map });
  changeVersion();
};

const config = inject('config');
const handleCloseActive = (item: any) => {
  const { RouteHomePageName, ViewName } = config as any;
  const scope = ViewName;
  const { code } = item;
  const { setSource, getSource, changeVersion } = useSourceRouteTabTagStore();
  let { list } = getSource();

  list = list.filter((item: any) => item.code !== code);
  const map = Object.fromEntries(list.map((item: any) => [item.id, item]));

  setSource({ list, map });
  changeVersion();

  router.push({ name: [`@${scope}`, 'ROUTE', RouteHomePageName].join('.') });
};

const updateSelectedKeys = (item: any) => {
  changeSelectedKeys({ selectedKeys: item });
};
</script>

<template>
  <PaneTagTab
    :base-list="routeState.list"
    :selectedKeys="selectedKeys"
    @handleClick="handleClick"
    @handleUpdateSelectedKeys="updateSelectedKeys"
    @handleCloseUnactive="handleCloseUnactive"
    @handleCloseActive="handleCloseActive"
  />
</template>
