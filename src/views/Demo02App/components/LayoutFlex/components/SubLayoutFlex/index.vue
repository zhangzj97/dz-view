<script setup lang="ts" name="SubLayoutFlex">
defineProps<{
  layoutInfo: any;
}>();

const flexCol = (layoutInfo: any) => {
  if (layoutInfo?.children?.find((item: any) => item.size.match(/w-/)?.[0])) return true;
};
</script>

<script lang="ts">
export default { name: 'SubLayoutFlex' };
</script>

<template>
  <dz-flex :row="flexCol(layoutInfo)" :size="layoutInfo.size">
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
