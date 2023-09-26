<script setup lang="ts">
import RouteTag from './components/RouteTag.vue';

const { dispatch, getState, Service } = useService();

const { routeTagState, menuState, versionState } = getState('Dz/Route');

const router: any = useRouter();

const findMenuByPath = (path: string) => {
  return menuState.list.find(item => item.path === path);
};

watch(
  () => versionState.version.value,
  async () => {
    const path = router.currentRoute?.value.path;
    const menu = findMenuByPath(path);
    if (menu.fixedTag) return;
    await dispatch(Service.Dz.Route.AddRouteTag)({ id: menu.id });
  }
);

onBeforeRouteUpdate(async (to, form, next) => {
  const path = to.matched.slice(-1)[0]?.path;
  const menu = findMenuByPath(path);
  await dispatch(Service.Dz.Route.AddRouteTag)({ id: menu.id });
  next();
});

const clickRouteTag = ({ id }: any) => {
  const path = menuState.map[id]?.path;
  router.push({ path });
};

const removeRouteTag = async ({ id }: any) => {
  const path = router.currentRoute?.value.path;
  const menu = findMenuByPath(path);
  await dispatch(Service.Dz.Route.RemoveRouteTag)({ id: menu.id });

  if (menu.id === id) {
    const id2 = routeTagState.fixed[0];
    const path2 = menuState.map[id2]?.path;
    router.push({ path: path2 });
  }
};

const removeAll = async () => {
  routeTagState.open.forEach(async (id: string) => {
    await dispatch(Service.Dz.Route.RemoveRouteTag)({ id });
  });

  const id2 = routeTagState.fixed[0];
  const path2 = menuState.map[id2]?.path;
  router.push({ path: path2 });
};

const fixedList = computed(() => routeTagState.fixed);
const openList = computed(() => routeTagState.open);

const activeId = computed(() => {
  const path = router.currentRoute?.value.path;
  const menu = findMenuByPath(path);
  return menu.id;
});
</script>

<template>
  <v s="w-grow h-8" class="shadow-lg">
    <v s="w-grow h-grow">
      <RouteTag
        v-for="(id, index) of fixedList"
        :key="index"
        class="scale-90"
        :id="menuState.map[id].id"
        :avatar="menuState.map[id].avatar"
        :title="menuState.map[id].title"
        :active="activeId === id"
        :showRightIcon="false"
        @clickRouteTag="clickRouteTag"
        @removeRouteTag="removeRouteTag"
      />
      <RouteTag
        v-for="(id, index) of openList"
        :key="index"
        class="scale-90"
        :id="menuState.map[id].id"
        :avatar="menuState.map[id].avatar"
        :title="menuState.map[id].title"
        :active="activeId === id"
        :showRightIcon="true"
        @clickRouteTag="clickRouteTag"
        @removeRouteTag="removeRouteTag"
      />
      <v-space s="w-grow h-grow" />
    </v>
    <v s="w-fit h-8" v="mouse-gray" @click="removeAll">
      <v-icon v="8-75" icon="carbon:close-outline" />
    </v>
  </v>
</template>
