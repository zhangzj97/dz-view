<script setup lang="ts">
import MenuLevel1 from './components/MenuLevel1.vue';
import MenuLevel2 from './components/MenuLevel2.vue';
import MenuLevel3 from './components/MenuLevel3.vue';

const { getState } = useService();

const { menuState, versionState } = getState('Dz/Route');

const router = useRouter();

onBeforeRouteUpdate(async (to, form, next) => {
  const path = to.matched.slice(-1)[0]?.path;
  const menu = findMenuByPath(path);
  if (!menu) return;
  menuState.collapse = {};
  menu.treePath.split(',').forEach((item: string) => {
    menuState.collapse[item] = true;
  });
  next();
});

watch(
  () => versionState.version.value,
  () => {
    const path = router.currentRoute?.value.path;
    const menu = findMenuByPath(path);
    if (!menu) return;
    menuState.collapse = {};
    menu.treePath.split(',').forEach((item: string) => {
      menuState.collapse[item] = true;
    });
  }
);

const clickMenu = ({ id }: any) => {
  const item = menuState.map[id];
  const { treePath, path, type } = item;

  if (menuState.collapse[id] === true) {
    menuState.collapse[id] = false;
    return;
  }

  menuState.collapse = {};
  treePath.split(',').forEach((item: string) => {
    menuState.collapse[item] = true;
  });

  if (type === 'node') {
    return;
  }

  if (path) {
    router.push({ path });
  }
};

const menuTree = computed(() => {
  if (menuState.levelTopMode) {
    return menuState.tree.find((item: any) => item.id === menuState.levelTopMenuId)?.children || [];
  } else {
    return menuState.tree;
  }
});

const findMenuByPath = (path: string) => {
  return menuState.list.find((item: any) => item.path === path);
};

const activeId = computed(() => {
  const path = router.currentRoute?.value.path;
  const menu = findMenuByPath(path);
  return menu?.id;
});
</script>

<template>
  <v s="w-fit h-grow" col>
    <MenuLevel1
      v-for="(item, index) of menuTree"
      :key="index"
      :id="item.id"
      :avatar="item.avatar"
      :title="item.title"
      :collapse="!!menuState.collapse[item.id]"
      :active="activeId === item.id"
      :showRightIcon="item.children?.length > 0"
      :iconMode="menuState.iconMode"
      @clickMenu="clickMenu(item)"
    >
      <MenuLevel2
        v-for="(item2, index2) of item.children"
        :key="index2"
        :id="item2.id"
        :avatar="item2.avatar"
        :title="item2.title"
        :collapse="!!menuState.collapse[item2.id]"
        :active="activeId === item2.id"
        :showRightIcon="item2.children?.length > 0"
        :iconMode="menuState.iconMode"
        @clickMenu="clickMenu(item2)"
      >
        <MenuLevel3
          v-for="(item3, index3) of item2.children"
          :key="index3"
          :id="item3.id"
          :avatar="item3.avatar"
          :title="item3.title"
          :collapse="!!menuState.collapse[item3.id]"
          :active="activeId === item3.id"
          :showRightIcon="item3.children?.length > 0"
          :iconMode="menuState.iconMode"
          @clickMenu="clickMenu(item3)"
        >
          <MenuLevel3
            v-for="(item4, index4) of item3.children"
            :key="index4"
            :id="item4.id"
            :avatar="item4.avatar"
            :title="item4.title"
            :collapse="!!menuState.collapse[item4.id]"
            :active="!!menuState.active[item4.id]"
            :showRightIcon="item4.children?.length > 0"
            :iconMode="menuState.iconMode"
            @clickMenu="clickMenu(item4)"
          />
        </MenuLevel3>
      </MenuLevel2>
    </MenuLevel1>
    <v-space s="w-grow h-grow" space />
  </v>
</template>
