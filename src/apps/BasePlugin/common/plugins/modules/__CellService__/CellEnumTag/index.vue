<script setup lang="ts">
// !!! PluginCellProps
type PluginCellProps = {
  code: string;
  cellOption: any;
  customOption: any;
  propsRow: any;
};
// !!!

const props = defineProps<PluginCellProps>();

const cellState = reactive<any>({
  code: null,
  entity: null,

  value: null,
  label: null,
});

const refresh = () => {
  // 1. 缓存数据
  cellState.entity = props.propsRow;
  cellState.code = props.code;
  // 2. 获取数据
  cellState.value = cellState.entity[cellState.code];
  // 3. 转化成显示的数据
  cellState.label = cellState.value;
};

onMounted(() => {
  refresh();
});
</script>

<template>
  <dz-view
    one
    :size="cellOption.size"
    :position="cellOption.position"
    :wrapper-class="cellOption.wrapperClass"
  >
    <dz-font>{{ cellState.label }}</dz-font>
  </dz-view>
</template>
