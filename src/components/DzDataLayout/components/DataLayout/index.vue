<script setup lang="ts" name="DataLayout">
import DzViewForLayout from './components/DzViewForLayout/index.vue';
defineProps<{ layoutData: any }>();
</script>

<script lang="ts">
export default { name: 'DataLayout' };
</script>

<template>
  <template v-for="(item, index) of layoutData" :key="index">
    <dz-view-for-layout
      :one="item.option.layout === 'one'"
      :col="item.option.layout === 'col'"
      :row="item.option.layout === 'row'"
      :size="item.option.size"
      :overflow="item.option.overflow === 'auto'"
      :overflow-hidden="item.option.overflow === 'hidden'"
      :fixed="item.option.fixed"
      :absolute="item.option.absolute"
      :position="item.option.position"
    >
      <template v-if="item.component">
        <component :is="item.component()" v-bind="item.props" />
      </template>

      <template v-else-if="item.children">
        <data-layout :layout-data="item.children">
          <template #default>
            <slot></slot>
          </template>
        </data-layout>
      </template>

      <template v-else-if="item.slot">
        <slot></slot>
      </template>
    </dz-view-for-layout>
  </template>
</template>
