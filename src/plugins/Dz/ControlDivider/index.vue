<script setup lang="ts">
import type { PluginControlProps } from '@/hooks/usePluginControl';

const { t } = useI18n();

const props = defineProps<PluginControlProps>();

const ruleState = reactive({
  errorMessage: false,
});

const text = computed(() => {
  if (props.text) return `${t(props.text)}`;
  return `提示文字`;
});
</script>

<template>
  <dz-view one size="h-grow" wrapperClass="px-4" position="1">
    <dz-divider>
      <dz-font>{{ text }}</dz-font>
    </dz-divider>
  </dz-view>
</template>
