<script setup lang="ts" name="MenuAntd">
import SubMenu from './components/SubMenu/index.vue';

defineProps<{
  menuList: any[];
  collapsed: boolean;
  mode?: string | any;
  theme?: string | any;
  openKeys?: any[];
  selectedKeys?: any[];
}>();

const emit = defineEmits<{
  (e: 'handleClick', item: any): void;
  (e: 'handleUpdateOpenKeys', item: any): void;
  (e: 'handleUpdateSelectedKeys', item: any): void;
}>();

const handleClick = (item: any) => {
  emit('handleClick', item);
};
const { t } = useI18n();

const updateOpenKeys = (item: any) => {
  emit('handleUpdateOpenKeys', item);
};

const updateSelectedKeys = (item: any) => {
  emit('handleUpdateSelectedKeys', item);
};
</script>

<template>
  <div class="max-w-[16rem] dz-menu-ant">
    <a-menu
      :mode="mode"
      :inline-collapsed="collapsed"
      :theme="theme"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
      @update:openKeys="updateOpenKeys"
      @update:selectedKeys="updateSelectedKeys"
    >
      <template v-for="(item, index) of menuList" :key="index">
        <template v-if="item.children && item.children?.length > 0">
          <sub-menu :menuInfo="item" @handleClick="handleClick" />
        </template>
        <template v-else>
          <a-menu-item :key="String(item.id)" @click="handleClick(item)">
            <template #icon>
              <dz-icon size="6" :icon="String(item.icon)" />
            </template>
            <div>{{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}</div>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<style lang="scss">
.dz-menu-ant :deep(.ant-menu-submenu-vertical .ant-menu-submenu-title) {
  @apply flex flex-row items-center;
}

.ant-menu-submenu-popup .ant-menu-item {
  @apply flex flex-row items-center;
}

.ant-menu-submenu-vertical.ant-menu-submenu > .ant-menu-submenu-title {
  @apply flex flex-row items-center;
}

.ant-menu-submenu-horizontal .ant-menu-submenu-title {
  @apply flex flex-row items-center;
}

.dz-menu-ant
  .ant-menu-inline-collapsed
  .ant-menu-submenu-title
  .ant-menu-title-content {
  display: none !important;
}
.dz-menu-ant .ant-menu.ant-menu-inline-collapsed {
  @apply w-fit;
}
.dz-menu-ant .ant-menu-inline-collapsed .ant-menu-submenu-title {
  padding: 0 20px !important;
}

.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  @apply border-r-0;
}
</style>
