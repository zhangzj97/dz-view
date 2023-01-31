<script setup lang="ts" name="SubMenu">
const { t } = useI18n();

const emit = defineEmits<{
  (e: 'handleClick', item: any): void;
}>();

const handleClick = (item: any) => {
  emit('handleClick', item);
};

defineProps<{
  menuInfo: any;
}>();
</script>

<script lang="ts">
export default { name: 'SubMenu' };
</script>

<template>
  <a-sub-menu :key="menuInfo.meta.id">
    <template #icon><dz-icon :icon="String(menuInfo.meta?.icon)" /></template>
    <template #title>
      <div>{{ t(String(menuInfo.meta?.code)) }}</div>
    </template>
    <template v-for="item in menuInfo.children" :key="item.meta.id">
      <template v-if="item.children && item.children.length > 0">
        <sub-menu :menuInfo="item" />
      </template>
      <template v-else>
        <a-menu-item :key="item.meta.id" @click="handleClick(item)">
          <template #icon><dz-icon :icon="String(item.meta?.icon)" /></template>
          <div>{{ t(String(item.meta?.code)) }}</div>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
