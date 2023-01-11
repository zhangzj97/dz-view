<script setup lang="ts" name="PaneMenu">
import MenuAntd from './components/MenuAntd/index.vue';
import PaneMenuToolSet from './components/PaneMenuToolSet/index.vue';
import { routes } from '@/router/index';
import { removeAttrs } from './utils/route';
import { useRouter } from 'vue-router';

const router = useRouter();

const routeState = reactive({
  menuList: removeAttrs('component', routes),
});

const handleClick = ({ meta }: any) => {
  const { url } = meta;

  router.push({ path: url });
};
</script>

<template>
  <div class="bg-white h-grow">
    <PaneMenuToolSet />
    <MenuAntd :menuList="routeState.menuList" @handleClick="handleClick"></MenuAntd>
  </div>
</template>
