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

const placeholder = computed(() => {
  if (props.text) return `${t(props.text)}`;
  return `请输入${t(props.label)}`;
});
</script>

<template>
  <dz-view col size="h-grow" wrapperClass="" position="1">
    <!-- 主体内容 -->
    <dz-view one size="h-fit w-3/4">
      <a-input-password size="small" allow-clear :placeholder="placeholder" autocomplete="new-password" />
    </dz-view>

    <!-- 提示文字 -->
    <dz-view one size="h-4">
      <dz-font v-if="ruleState.errorMessage" xs color="text-red-500">{{ ruleState.errorMessage }}</dz-font>
    </dz-view>
  </dz-view>
</template>
