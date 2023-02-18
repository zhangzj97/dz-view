<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';
import { useRouter } from 'vue-router';

import { useSource } from '@/hooks/useSource';
import { useTree } from '@/hooks/useTree';

onBeforeMount(async () => {
  const { SourceList } = await useSource({ strategy: 'local', sourceName: 'menu' });
  const { listToTree } = useTree();

  routeState.menuList = listToTree({ list: SourceList.filter((item: any) => item.showMenu) }).filter((item: any) => !item.parentId);
});

const router = useRouter();

const routeState = reactive<any>({
  menuList: [],
});

const handleClick = (item: any) => {
  const { redirct, scope } = item;

  router.push({ path: `/@${scope}${redirct}` });
};
</script>

<template>
  <MenuAntd :menuList="routeState.menuList" @handleClick="handleClick" />
</template>
