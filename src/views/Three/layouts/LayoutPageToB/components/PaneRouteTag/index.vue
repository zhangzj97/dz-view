<script setup lang="ts">
import PaneTagTab from './components/PaneTagTab/index.vue';
import { useService } from '@/hooks/useService';

const { dispatch } = useService();
const router = useRouter();
const route = useRoute();

const routeTagState = reactive<any>({
  SourceAccessRouteTagState: {
    version: {},
    theme: 'light',
    selectedKeys: [],
    aliveList: [],
  },
  routeTagList: [],
});

watch(
  () => router.currentRoute.value.path,
  () => {
    refreshAliveList();
    refreshRouteTagKey();
  }
);

const refreshAliveList = async () => {
  const route: any = router.currentRoute.value;

  // 1.1. 当下的 routeTag
  const currentRouteTag = {
    code: route.meta.access?.code,
    scope: route.meta.access?.scope,
    tagFixed: route.meta.access?.tagFixed,
    route: route.path,
    routeTagCode: route.path,
  };
  // 1.2. 重新获取 tagFixed 的 Tag
  const tagFixedList = routeTagState.routeTagList
    .filter((item: any) => item.tagFixed)
    .map((item: any) => ({
      code: item.code,
      scope: item.scope,
      tagFixed: item.tagFixed,
      route: item.route,
      routeTagCode: item.route,
    }));
  // 1.3. concat 缓存的 Tag, 剔除了 tagFixed
  const aliveListWithoutFixed =
    routeTagState.SourceAccessRouteTagState.aliveList
      .filter((item: any) => !item.tagFixed)
      .map((item: any) => ({ ...item }));
  // 1.4. 整合 并去重
  const routeTagList = Object.values(
    Object.fromEntries(
      [...tagFixedList, ...aliveListWithoutFixed, currentRouteTag].map(item => [
        item.routeTagCode,
        item,
      ])
    )
  );
  console.log(routeTagList);
  // 2.1. 获取权限
  const { data: AccessPermissionData } = await dispatch(
    'SourceAccessPermission.Find',
    { remote: false }
  );
  // 2.2. 剔除无权限 Tag
  const aliveList = routeTagList.filter(
    (item: any) => AccessPermissionData[item.code]
  );

  // 3 改变 State
  await dispatch('SourceAccessRouteTag.UpdateState', {
    aliveList,
    selectedKeys: [currentRouteTag.routeTagCode],
  });
};

const refreshRouteTagKey = () => {
  const { id, showMenu, path } = route.meta.access as any;
};

const refreshSourceAccreeRouteTag = async () => {
  const { data } = await dispatch('SourceAccessRouteTag.Find', {});
  routeTagState.routeTagList = Object.values(data);
};

const refreshSourceAccreeRouteTagState = async () => {
  const { data } = await dispatch('SourceAccessRouteTag.State', {});
  routeTagState.SourceAccessRouteTagState = data;
};

// 初始化刷新
onBeforeMount(async () => {
  await refreshSourceAccreeRouteTag();
  await refreshSourceAccreeRouteTagState();
  await refreshAliveList();
});

const handleClick = (value: any) => {
  const { route } = value;
  router.push({ path: route });
};

const updateSelectedKeys = async (value: any) => {
  await dispatch('SourceAccessRouteTag.UpdateState', { selectedKeys: value });
};

const handleCloseUnactive = async (value: any) => {
  console.log(value);
  const { routeTagCode } = value;
  const aliveList = routeTagState.SourceAccessRouteTagState.aliveList.filter(
    (item: any) => item.routeTagCode !== routeTagCode
  );
  await dispatch('SourceAccessRouteTag.UpdateState', { aliveList });
};

const handleCloseActive = async (value: any) => {
  console.log(value);
  const { routeTagCode } = value;
  const aliveList = routeTagState.SourceAccessRouteTagState.aliveList.filter(
    (item: any) => item.routeTagCode !== routeTagCode
  );
  await dispatch('SourceAccessRouteTag.UpdateState', { aliveList });

  const redirct = routeTagState.SourceAccessRouteTagState.aliveList[0];
  if (redirct) {
    router.push({ name: redirct.code });
  } else {
    router.push({ name: 'Router' });
  }
};
</script>

<template>
  <PaneTagTab
    :base-list="routeTagState.SourceAccessRouteTagState.aliveList"
    :selectedKeys="routeTagState.SourceAccessRouteTagState.selectedKeys"
    @handleClick="handleClick"
    @handleUpdateSelectedKeys="updateSelectedKeys"
    @handleCloseUnactive="handleCloseUnactive"
    @handleCloseActive="handleCloseActive"
  />
</template>
