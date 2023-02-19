<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';

import { useRouter } from 'vue-router';
import { useTree } from '@/hooks/useTree';
import { useSourceMenuStore, useSourceMenuStateStore } from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const { collapsed, mode, theme } = storeToRefs(useSourceMenuStateStore());

const { version } = storeToRefs(useSourceMenuStore());
const { listToTree } = useTree();

const refresh = () => {
  const { list } = useSourceMenuStore();
  const menuShowList = list.filter((item: any) => item.showMenu);
  routeState.menuList = listToTree({ list: menuShowList }).filter((item: any) => !item.parentId);
};

const router = useRouter();

const routeState = reactive<any>({ menuList: [], collapsed: false });

// 接收通知
watch(version, refresh);

// 初始化刷新
onMounted(async () => {
  refresh();
});

const handleClick = (item: any) => {
  const { redirct, scope } = item;
  router.push({ path: `/@${scope}${redirct}` });
};
</script>

<template>
  <MenuAntd :menuList="routeState.menuList" @handleClick="handleClick" :mode="mode" :theme="theme" :collapsed="collapsed" />
</template>
