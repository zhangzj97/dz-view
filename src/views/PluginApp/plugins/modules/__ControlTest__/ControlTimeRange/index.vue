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
  const [start, end] = entity[controlState.code] || [];
  if (start && end) {
    controlState.value = [dayjs(start), dayjs(end)];
  } else {
    controlState.value = null;
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
  emit('updateValue', value);
  const [start, end] = value;
  if (start && end) {
    emit('updateValue', [start.valueOf(), end.valueOf()]);
  } else {
    emit('updateValue', null);
  }
};
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}
    {{ version }}
    <a-range-picker
      show-time
      :value="controlState.value"
      @update:value="updateValue"
    />
  </dz-view>
</template>
