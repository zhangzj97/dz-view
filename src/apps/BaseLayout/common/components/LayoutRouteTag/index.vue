<script setup lang="ts">
import { useService } from '@/hooks/useService';
import RouteTag from './components/RouteTag.vue';

const { dispatch, getState } = useService();

const { routeTagState, menuState } = getState('Dz/Route');

const router = useRouter();

onMounted(async () => {
  const toId = router.currentRoute?.value?.meta?.menu?.id;
  await dispatch('Dz/Route.AddRouteTag', { id: toId });
});

onBeforeRouteUpdate(async (to, form, next) => {
  const toId = to?.meta?.menu?.id;
  await dispatch('Dz/Route.AddRouteTag', { id: toId });
  next();
});

const clickRouteTag = ({ id }: any) => {
  const item = menuState.map[id];
  const { path } = item;
};

const removeRouteTag = async ({ id }: any) => {
  await dispatch('Dz/Route.RemoveRouteTag', { id });
};

const removeAll = async () => {
  await dispatch('Dz/Route.RemoveAllRouteTag', {});
};

const openList = computed(() => {
  return [...routeTagState.fixed, ...routeTagState.open];
});
</script>

<template>
  <v s="w-grow h-8" class="shadow-lg">
    <v s="w-grow h-grow">
      <RouteTag
        v-for="(id, index) of openList"
        :key="index"
        class="scale-90"
        :id="menuState.map[id].id"
        :avatar="menuState.map[id].avatar"
        :title="menuState.map[id].title"
        :active="!!routeTagState.active[id]"
        :showRightIcon="!menuState.map[id].fixedTag"
        @click="clickRouteTag(menuState.map[id])"
        @removeRouteTag="removeRouteTag(menuState.map[id])"
      />
      <v-space s="w-grow h-grow" />
    </v>
    <v s="w-fit h-8" v="mouse-gray" @click="removeAll">
      <v-icon v="8-75" icon="carbon:close-outline" />
    </v>
  </v>
</template>
