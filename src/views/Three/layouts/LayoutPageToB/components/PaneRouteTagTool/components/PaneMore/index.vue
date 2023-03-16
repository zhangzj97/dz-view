<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useSourceRouteTabTagStore } from '@/hooks/useSourceStore';

const route = useRoute();
const router = useRouter();

const config = inject('config');
const handleCloseCurrent = () => {
  const { RouteHomePageName, ViewName } = config as any;
  const scope = ViewName;
  const { code, tagFixed } = route.meta.menu as any;
  if (tagFixed) return;

  const { setSource, getSource, changeVersion } = useSourceRouteTabTagStore();
  let { list } = getSource();

  list = list.filter((item: any) => item.code !== code);
  const map = Object.fromEntries(list.map((item: any) => [item.id, item]));

  setSource({ list, map });
  changeVersion();

  router.push({ name: [`@${scope}`, 'ROUTE', RouteHomePageName].join('.') });
};

const handleCloseOther = () => {
  const { setSource, getSource, changeVersion } = useSourceRouteTabTagStore();
  let { list } = getSource();

  list = list.filter((item: any) => item.tagFixed);
  list.push(route.meta.menu);
  const map = Object.fromEntries(list.map((item: any) => [item.id, item]));

  setSource({ list, map });
  changeVersion();
};
const handleCloseAll = () => {
  const { RouteHomePageName, ViewName } = config as any;
  const scope = ViewName;
  const { setSource, getSource, changeVersion } = useSourceRouteTabTagStore();
  let { list } = getSource();

  list = list.filter((item: any) => item.tagFixed);
  const map = Object.fromEntries(list.map((item: any) => [item.id, item]));

  setSource({ list, map });
  changeVersion();

  router.push({ name: [`@${scope}`, 'ROUTE', RouteHomePageName].join('.') });
};

const actionState = reactive({
  list: [
    //
    { title: '关闭当前标签页', handler: handleCloseCurrent },
    { title: '关闭其他标签页', handler: handleCloseOther },
    { title: '关闭所有标签页', handler: handleCloseAll },
    { title: '其他', handler: () => {} },
  ],
});
</script>

<template>
  <dz-view
    one
    size="h-grow"
    position="5"
    wrapper-class="border-l-[1px] rouned border-gray-300 hover:bg-gray-100"
  >
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:round-more-horiz" />
      <template #content>
        <dz-view col size="w-32" class="max-h-48" overflow bg="bg-white">
          <template v-for="(item, index) of actionState.list" :key="index">
            <dz-view
              one
              pointer
              size="h-8"
              position="5"
              class="hover:bg-gray-100 shrink-0"
              @click="item.handler"
            >
              <dz-font pointer sm>{{ item.title }}</dz-font>
            </dz-view>
          </template>
        </dz-view>
      </template>
    </dz-popover>
  </dz-view>
</template>
