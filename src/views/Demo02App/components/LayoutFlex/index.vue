<script setup lang="ts" name="LayoutFlex">
import SubLayoutFlex from './components/SubLayoutFlex/index.vue';

defineProps<{
  layoutInfo: any;
}>();
</script>

<template>
  <dz-flex col size="w-full h-full">
    <template v-for="(item, index) of layoutInfo.children" :key="index">
      <template v-if="item.children && item.children.length > 0">
        <sub-layout-flex :layoutInfo="item" />
      </template>
      <template v-else>
        <dz-flex col :size="item.size">
          <component :is="item.component()" v-bind="item.props" />
        </dz-flex>
      </template>
    </template>
  </dz-flex>
</template>
