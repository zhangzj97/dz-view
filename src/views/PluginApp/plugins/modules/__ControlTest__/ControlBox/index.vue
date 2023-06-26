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
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}
    <a-radio-group :value="controlState.value" @update:value="updateValue">
      <a-radio value="a">Hangzhou</a-radio>
      <a-radio value="b" disabled>Shanghai</a-radio>
      <a-radio value="c">Beijing</a-radio>
      <a-radio value="d">Chengdu</a-radio>
    </a-radio-group>
  </dz-view>
</template>
