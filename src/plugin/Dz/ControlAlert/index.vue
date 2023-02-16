<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  k: string;
  label: string;
  text: string | false;
  tooltip?: string | false;
  visible?: boolean;
  readonly?: boolean;
  required?: boolean;
  propsRow: any;
  conventionOption: any;
  customOption: any;
}>();

const ruleState = reactive({
  errorMessage: false,
});

const text = computed(() => {
  if (props.text) return `${t(props.text)}`;
  return `提示文字`;
});
</script>

<template>
  <dz-view one size="h-grow" wrapperClass="px-4 py-2" position="1">
    <dz-alert :type="props.customOption.type">
      <dz-font xs>{{ text }}</dz-font>
    </dz-alert>
  </dz-view>
</template>
