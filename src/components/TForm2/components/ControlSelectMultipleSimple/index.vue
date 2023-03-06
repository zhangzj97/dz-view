<script setup lang="ts">
// !!! PlugincontrolProps
type PluginControlProps = {
  code: string;
  controlOption?: any;
  customOption?: any;
  propsRow: any;

  version: string | number;
};
// !!!

const props = defineProps<PluginControlProps>();

const controlState = reactive<any>({
  code: null,

  value: null,
  label: null,
});

watch(
  () => props.version,
  () => {
    refresh();
  }
);

const entity: any = inject('entity');

const refresh = () => {
  // 1. 缓存数据
  controlState.code = props.code;
  // 2. 获取数据
  controlState.value = entity[controlState.code];
  // 3. 转化成显示的数据
  controlState.label = controlState.value;
};

onMounted(() => {
  refresh();
});

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
  (e: 'changeValue', value: any): void;
}>();

const updateValue = value => {
  emit('updateValue', value);
};

const options1 = [
  { id: 'jack', label: 'Jack' },
  { id: 'lucy', label: 'Lucy' },
  { id: 'disabled', label: 'Disabled', disabled: true },
  { id: 'yiminghe', label: 'Yiminghe' },
  { id: 'yiminghe1', label: 'Yiminghe' },
  { id: 'yiminghe2', label: 'Yiminghe' },
  { id: 'yiminghe3', label: 'Yiminghe' },
  { id: 'yiminghe4', label: 'Yiminghe' },
];
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}

    <a-select
      ref="select"
      :value="controlState.value"
      @update:value="updateValue"
      :options="options1"
      :field-names="{ label: 'label', value: 'id', options: 'children' }"
      mode="tags"
    ></a-select>
  </dz-view>
</template>
