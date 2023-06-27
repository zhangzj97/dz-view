<script setup lang="ts">
import { useValidate } from './useValidate';

const props = defineProps<{
  code: string;
}>();

const formState: any = inject('formState');

const version = computed(() => formState.schemaVersion[props.code]);

watch(version, () => {
  refresh();
  validate();
});

const controlState = reactive<any>({ value: null, label: null });

const refresh = () => {
  controlState.value = formState.entity[props.code];
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

const { validate: validateCurrent, error } = useValidate();

const validate = () =>
  validateCurrent({
    rule: formState.schemaData[props.code].rule || [],
    requiredValidate: (value: any) => !!value,
    value: controlState.value,
  });

defineExpose({ validate });
</script>

<template>
  <dz-view col :wrapper-class="['px-2 py-1']" transition>
    <a-input :value="controlState.value" @update:value="updateValue" />

    <dz-font xs color="text-red-500" class="h-5">{{ error.message }}</dz-font>
  </dz-view>
</template>
