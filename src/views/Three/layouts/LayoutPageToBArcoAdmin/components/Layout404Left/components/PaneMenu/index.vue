<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';

import { useRouter, useRoute } from 'vue-router';
import { useTree } from '@/hooks/useTree';
import { useSourceMenuStore, useSourceMenuStateStore } from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();

const { collapsed, mode, theme, openKeys, selectedKeys } = storeToRefs(useSourceMenuStateStore());
const { changeOpenKeys, changeSelectedKeys } = useSourceMenuStateStore();

const { version } = storeToRefs(useSourceMenuStore());
const { listToTree } = useTree();

const refresh = () => {
  const { list } = useSourceMenuStore();
  const menuShowList = list.filter((item: any) => item.showMenu);
  routeState.menuList = listToTree({ list: menuShowList }).filter((item: any) => !item.parentId);
};

const refreshMenuKey = () => {
  const { map } = useSourceMenuStore();
  const { code } = route.meta.data as any;
  const { id, showMenu, path } = map[code];
  const openKeys = path.replace(/,.*?$/, '').split(',');
  if (showMenu) {
    changeSelectedKeys({ selectedKeys: [id] });
  } else {
    changeSelectedKeys({ selectedKeys: [] });
  }
  changeOpenKeys({ openKeys });
};

const routeState = reactive<any>({ menuList: [], collapsed: false });

// 接收通知
watch(version, refresh);

// 初始化刷新
onMounted(async () => {
  refresh();
  refreshMenuKey();
});

const handleClick = (item: any) => {
  const { redirct, scope } = item;
  router.push({ path: `/@${scope}${redirct}` });
};

// 根菜单 互斥
const updateOpenKeys = (item: any) => {
  const { list } = useSourceMenuStore();
  const rootList = list.map((item: any) => item.id);
  const lastCode = item[item.length - 1];
  if (!lastCode) {
    changeOpenKeys({ openKeys: [] });
  } else if (item.find((item: any) => rootList.includes(item) && item !== lastCode)) {
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
