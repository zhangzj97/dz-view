<script setup lang="ts">
import TreeMenu from '@/views/StudyApp/components/TreeMenu/index.vue'
import { routes } from '@/router';
import type { RouteRecordRaw } from 'vue-router';

const { t } = useI18n();

const routeToMenu = (routeList: RouteRecordRaw[]): MenuDTO[] => {
  const result: MenuDTO[] = [];

  const repeat = (item: RouteRecordRaw): MenuDTO => {
    const { children, name, path, redirect } = item;
    const result: MenuDTO = { id: '', parentId: '', url: '', redirect: '', component: '', title: '' };

    const id = String(name);
    const [parentId] = String(name).split('/');

    result.id = id;
    result.parentId = parentId;
    result.url = path;
    result.title = t(`menu.${String(name)}`);
    if (redirect) result.redirect = String(redirect);
    result.path = `${parentId},${id}`;

    if (Array.isArray(children)) {
      result.children = children.map(repeat);
    }

    return result;
  };

  routeList.map(repeat).forEach(item => result.push(item));

  return result;
};

const menuState = reactive<{
  list: MenuDTO[];
}>({
  list: [],
});

onMounted(() => {
  const routeList = routes.find(item => item.name == 'StudyApp')
  menuState.list = routeToMenu(routeList.children);
});
</script>

<template>
  <DzFlex :style="{ maxHeight: 'calc(100vh - 64px - 64px)' }">
    <TreeMenu :list="menuState.list" />
  </DzFlex>
</template>
