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

const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}
    <a-checkbox-group
      :value="controlState.value"
      @update:value="updateValue"
      :options="optionsWithDisabled"
    />
  </dz-view>
</template>
