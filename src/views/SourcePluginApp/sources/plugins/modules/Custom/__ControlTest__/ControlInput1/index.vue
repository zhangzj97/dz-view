<script setup lang="ts">
import { useValidate } from './useValidate';

const props = defineProps<{
  code: string;
}>();

const formState: any = inject('formState');

const version = computed(() => formState.schemaVersion[props.code]);

watch(
  () => version,
  () => {
    refresh();
    validate();
  }
);

const controlState = reactive<any>({ value: null, label: null });

const refresh = () => {
  // 1. 缓存数据
  controlState.code = formState.entity[props.code];
  // 2. 获取数据
  controlState.value = formState.entity[controlState.code];
  // 3. 转化成显示的数据
  controlState.label = controlState.value;
};

onMounted(() => {
  refresh();
});

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
}>();

const updateValue = (value: any) => emit('updateValue', value);

const { validate: validateCurrent, message, errorState } = useValidate();

const validate = () =>
  validateCurrent({
    rule: formState.schemaData.rule,
    requiredValidate: (value: any) => !!value,
    value: controlState.value,
  });

defineExpose({ validate });
</script>

<template>
  <dz-view col :wrapper-class="['px-2 py-1']">
    <a-input :value="controlState.value" @update:value="updateValue" />

    <dz-font xs color="text-red-500" class="h-5">{{ message }}</dz-font>
  </dz-view>
</template>
