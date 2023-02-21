<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';

import { useRouter, useRoute } from 'vue-router';
import { useTree } from '@/hooks/useTree';
import {
  useSourceMenuStore,
  useSourceMenuStateStore,
} from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();

const { collapsed, mode, theme, openKeys, selectedKeys } = storeToRefs(
  useSourceMenuStateStore()
);
const { changeOpenKeys, changeSelectedKeys } = useSourceMenuStateStore();

const { version } = storeToRefs(useSourceMenuStore());
const { listToTree } = useTree();

const refreshMenu = () => {
  const { getSource } = useSourceMenuStore();
  const { list } = getSource();
  const menuShowList = list.filter((item: any) => item.showMenu);
  routeState.menuList = listToTree({ list: menuShowList }).filter(
    (item: any) => {
      return !item.parentId || item.parentId === 0 || item.parentId === '0';
    }
  );
};

const refreshMenuKey = () => {
  if (!route.meta?.menu) return;
  const { id, showMenu, path } = route.meta.menu as any;
  const openKeys = path.replace(/,.*?$/, '').split('|');
  if (showMenu) {
    changeSelectedKeys({ selectedKeys: [String(id)] });
  } else {
    changeSelectedKeys({ selectedKeys: [] });
  }
  changeOpenKeys({ openKeys });
};

const routeState = reactive<any>({ menuList: [], collapsed: false });

// 接收通知
watch(version, refreshMenu);
watch(
  () => router.currentRoute.value.path,
  () => {
    refreshMenuKey();
  }
);

// 初始化刷新
onMounted(async () => {
  refreshMenu();
  refreshMenuKey();
});

const handleClick = (item: any) => {
  const { route } = item;
  router.push({ path: route });
};

// 根菜单 互斥
const updateOpenKeys = (item: any) => {
  const { getSource } = useSourceMenuStore();
  const { list } = getSource();
  const rootList = list
    .filter(
      (item: any) =>
        !item.parentId || item.parentId === '0' || item.parentId === 0
    )
    .map((item: any) => String(item.id));

  const lastCode = String(item[item.length - 1]) || '';
  if (!lastCode) {
    changeOpenKeys({ openKeys: [] });
  } else if (!rootList.includes(lastCode)) {
    changeOpenKeys({ openKeys: item });
  } else if (
    item.find((item: any) => rootList.includes(item) && item !== lastCode)
  ) {
    changeOpenKeys({ openKeys: [lastCode] });
  } else {
    changeOpenKeys({ openKeys: item });
  }
};

const updateSelectedKeys = (item: any) => {
  changeSelectedKeys({ selectedKeys: item });
};
</script>

<template>
  <MenuAntd
    :menuList="routeState.menuList"
    :mode="mode"
    :theme="theme"
    :collapsed="collapsed"
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    @handleClick="handleClick"
    @handleUpdateOpenKeys="updateOpenKeys"
    @handleUpdateSelectedKeys="updateSelectedKeys"
  />
</template>
