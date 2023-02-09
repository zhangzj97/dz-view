<script setup lang="ts">
const props = defineProps<{
  cellOption: any;
  customOption: any;
  propsRow: any;
  field: string;
}>();

const cellState = reactive<any>({
  field: null,
  entity: null,
  value: null,
  label: null,
});

onMounted(() => {
  cellState.field = props.field;
  cellState.entity = props.propsRow;
  cellState.value = cellState.entity[cellState.field];
  cellState.label = cellState.value;
});
</script>

<template>
  <dz-view one :size="cellOption.size" :position="cellOption.position" :wrapper-class="cellOption.wrapperClass">
    <dz-font>{{ cellState.label }}</dz-font>
  </dz-view>
</template>
