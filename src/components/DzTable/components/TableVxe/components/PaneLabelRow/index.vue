<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  k?: string;

  label: string;
  text?: string | false;
  tooltip?: string | false;

  visible?: boolean;
  readonly?: boolean;

  required?: boolean;

  propsRow?: any;
  conventionOption?: any;
  customOption?: any;
}>();
</script>

<template>
  <dz-view col size="h-grow" :wrapperClass="['px-2']" position="6">
    <!-- 主体内容 -->
    <dz-view row size="h-fit">
      <template v-if="required">
        <dz-view one v-if="required" size="w-fit" position="3">
          <dz-font color="text-red-500">*</dz-font>
        </dz-view>
      </template>

      <dz-view one size="w-fit" position="3">
        <dz-font>{{ t(label) }}</dz-font>
      </dz-view>

      <template v-if="tooltip">
        <dz-view one size="w-6" position="5">
          <dz-popover :tooltip="t(tooltip)">
            <dz-icon size="4" icon="ic:outline-info" />
          </dz-popover>
        </dz-view>
      </template>
    </dz-view>

    <!-- 占位 错误提示文字  -->
    <dz-view one size="h-2"></dz-view>
  </dz-view>
</template>
