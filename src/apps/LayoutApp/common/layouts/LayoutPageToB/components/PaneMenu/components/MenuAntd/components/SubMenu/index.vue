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
  <a-sub-menu :key="String(menuInfo.id)">
    <template #icon>
      <dz-icon size="6" :icon="String(menuInfo.icon)" />
    </template>
    <template #title>
      <div>{{ t(String(`@${menuInfo.scope}.ROUTE.${menuInfo.code}`)) }}</div>
    </template>
    <template v-for="item in menuInfo.children" :key="item.id">
      <template v-if="item.children && item.children.length > 0">
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
  </a-sub-menu>
</template>
