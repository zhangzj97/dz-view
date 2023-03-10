<script setup lang="ts">
import dayjs from 'dayjs';

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
  if (entity[controlState.code]) {
    controlState.value = dayjs(entity[controlState.code]);
  } else {
    controlState.value = entity[controlState.code];
  }
  // 3. 转化成显示的数据
  controlState.label = controlState.value;
};

onMounted(() => {
  refresh();
});

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
}>();

const updateValue = value => {
  if (value) {
    emit('updateValue', value.valueOf());
  } else {
    emit('updateValue', value);
  }
};
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}
    {{ version }}
    <a-date-picker
      show-time
      placeholder="Select Time"
      :value="controlState.value"
      @update:value="updateValue"
    />
  </dz-view>
</template>
