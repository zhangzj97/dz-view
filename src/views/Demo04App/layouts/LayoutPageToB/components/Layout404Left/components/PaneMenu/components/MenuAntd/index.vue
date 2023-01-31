<script setup lang="ts" name="MenuAntd">
import SubMenu from './components/SubMenu/index.vue';

const emit = defineEmits<{
  (e: 'handleClick', item: any): void;
}>();

const handleClick = (item: any) => emit('handleClick', item);

const { t } = useI18n();
defineProps<{
  menuList: any[];
}>();
</script>

<template>
  <a-menu mode="inline">
    <template v-for="(item, index) of menuList" :key="index">
      <template v-if="item.children && item.children?.length > 0">
        <sub-menu :menuInfo="item" @handleClick="handleClick" />
      </template>
      <template v-else>
        <a-menu-item :key="item.mate?.id" @click="handleClick(item)">
          <template #icon><dz-icon :icon="String(item.meta?.icon)" /></template>
          <div>{{ t(String(item.meta?.code)) }}</div>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>
