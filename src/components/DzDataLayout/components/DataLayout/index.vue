<script setup lang="ts">
import DzViewForLayout from './components/DzViewForLayout/index.vue';
defineProps<{ layoutData: any }>();
</script>

<script lang="ts">
export default { name: 'DataLayout' };
</script>

<template>
  <dz-view-for-layout
    :one="layoutData.option.layout === 'one'"
    :col="layoutData.option.layout === 'col'"
    :row="layoutData.option.layout === 'row'"
    :grid="layoutData.option.layout === 'grid'"
    :size="layoutData.option.size"
    :overflow="layoutData.option.overflow === 'auto'"
    :overflow-hidden="layoutData.option.overflow === 'hidden'"
    :fixed="layoutData.option.fixed"
    :absolute="layoutData.option.absolute"
    :position="layoutData.option.position"
    :shadow="layoutData.option.shadow"
    :class="layoutData.option.class"
  >
    <template v-if="layoutData.component">
      <component :is="layoutData.component()" v-bind="layoutData.props" />
    </template>

    <template v-else-if="layoutData.children">
      <template v-for="(item, index) of layoutData.children" :key="index">
        <data-layout :layout-data="item">
          <template #default>
            <slot></slot>
          </template>
        </data-layout>
      </template>
    </template>

    <template v-else-if="layoutData.slot">
      <slot></slot>
    </template>
  </dz-view-for-layout>
</template>
