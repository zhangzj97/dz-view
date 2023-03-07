<script setup lang="ts">
// !!! PlugincontrolProps
type PluginControlProps = {
  code: string;
  controlOption?: any;
  customOption?: any;
  propsRow?: any;

  version: string | number;
};
// !!!

const props = defineProps<PluginControlProps>();

const controlState = reactive<any>({
  code: null,
  entity: null,
  value: null,
  label: null,
});

watch(
  () => props.version,
  () => {
    refresh();
  }
);

const refresh = () => {
  // 1. 缓存数据
  controlState.entity = props.propsRow;
  controlState.code = props.code;
  // 2. 获取数据
  controlState.value = controlState.entity[controlState.code];
  // 3. 转化成显示的数据
  controlState.label = controlState.value;
};

onMounted(() => {
  console.log(props.propsRow);
  refresh();
});

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
}>();

const updateValue = value => {
  emit('updateValue', value);
};
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ version }}
    <a-input :value="controlState.value" @update:value="updateValue" />
  </dz-view>
</template>
