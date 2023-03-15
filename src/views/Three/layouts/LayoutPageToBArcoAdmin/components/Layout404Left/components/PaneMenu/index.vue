<script setup lang="ts">
import MenuAntd from './components/MenuAntd/index.vue';
import { useTree } from '@/hooks/useTree';
import { useService } from '@/hooks/useService';

const { dispatch } = useService();
const router = useRouter();
const route = useRoute();

const menuState = reactive<any>({
  SourceAccessMenuState: {
    version: {},
    collapsed: false,
    mode: 'inline',
    theme: 'light',
    openKeys: [],
    selectedKeys: [],
  },
  menuList: [],
});

watch(
  () => router.currentRoute.value.path,
  () => {
    refreshMenuKey();
  }
);

const refreshMenuKey = async () => {
  const { id, showMenu, path } = route.meta.access as any;
  if (!showMenu) {
    await dispatch('SourceAccessMenu.UpdateState', { selectedKeys: [] });
    return;
  }
  const openKeys = path.replace(/,.*?$/, '').split('|');
  const selectedKeys = [String(id)];
  await dispatch('SourceAccessMenu.UpdateState', { openKeys, selectedKeys });
};

const refreshSourceAccreeMneu = async () => {
  const { data } = await dispatch('SourceAccessMenu.Find', {});
  menuState.menuList = useTree().listToTree({ list: Object.values(data) });
};

const refreshSourceAccreeMneuState = async () => {
  const { data } = await dispatch('SourceAccessMenu.State', {});
  menuState.SourceAccessMenuState = data;
};

// 初始化刷新
onBeforeMount(async () => {
  await refreshSourceAccreeMneu();
  await refreshSourceAccreeMneuState();
});

const updateSelectedKeys = async (value: any) => {
  await dispatch('SourceAccessMenu.UpdateState', { selectedKeys: value });
};

const handleClick = (value: any) => {
  const { code } = value;
  router.push({ name: code });
};

// 根菜单 互斥
const updateOpenKeysRootUnique = async (value: any) => {
  // 1. 获取最后的选择
  const lastCode = value[value.length - 1] || '';
  // 2. 制作 Map
  const { data } = await dispatch('SourceAccessMenu.Find', {});
  const map = Object.fromEntries(
    Object.values(data).map((item: any) => [item.id, item])
  );
  // 3. 剔除所有根级 菜单
  const codeListWithoutRoot = value
    .filter(
      (item: any) =>
        isDefined(map[item]?.parentId) && String(map[item]?.parentId) !== '0'
    )
    .map((item: any) => String(item.id));
  // 4. 剔除所有根级 菜单
  const openKeys = [...codeListWithoutRoot, String(lastCode)];
  await dispatch('SourceAccessMenu.UpdateState', { openKeys });
};

// const updateOpenKeys = async (value: any) => {
//   const openKeys = value;
//   await dispatch('SourceAccessMenu.UpdateState', { openKeys });
// };
</script>

<template>
  <MenuAntd
    :menuList="menuState.menuList"
    :mode="menuState.SourceAccessMenuState.mode"
    :theme="menuState.SourceAccessMenuState.theme"
    :collapsed="menuState.SourceAccessMenuState.collapsed"
    :openKeys="menuState.SourceAccessMenuState.openKeys"
    :selectedKeys="menuState.SourceAccessMenuState.selectedKeys"
    @handleClick="handleClick"
    @handleUpdateOpenKeys="updateOpenKeysRootUnique"
    @handleUpdateSelectedKeys="updateSelectedKeys"
  />
</template>
