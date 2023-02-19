<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';

import { useRouter } from 'vue-router';
import { useTree } from '@/hooks/useTree';
import { useSourceMenuStore } from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const { version } = storeToRefs(useSourceMenuStore());
const { listToTree } = useTree();

const refresh = () => {
  const { list } = useSourceMenuStore();
  const menuShowList = list.filter((item: any) => item.showMenu);
  routeState.menuList = listToTree({ list: menuShowList }).filter((item: any) => !item.parentId);
};

watch(version, refresh);

onMounted(async () => {
  refresh();
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
