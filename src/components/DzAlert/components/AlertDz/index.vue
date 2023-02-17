<script setup lang="ts">
defineProps<{
  title?: string;
  message?: string;

  closedable?: boolean;

  themeOption?: any;
}>();
</script>

<template>
  <dz-view
    row
    size="h-fit w-full"
    :wrapper-class="[
      //
      'py-2 px-4',
      themeOption.bg,
      themeOption.border,
      'border-2',
      'rounded',
    ]"
  >
    <template v-if="themeOption.icon">
      <dz-view one size="w-fit" wrapper-class="pr-2">
        <dz-icon size="6" :icon="themeOption.icon" :color="themeOption.iconColor" />
      </dz-view>
    </template>

    <dz-view col size="w-grow">
      <template v-if="title">
        <dz-view col size="h-fit w-grow" position="4">
          <dz-font base :color="themeOption.textColor" bold>{{ title }}</dz-font>
        </dz-view>
      </template>

      <dz-view col size="h-fit w-grow" position="4">
        <slot>
          <dz-font xs :color="themeOption.textColor">{{ message }}</dz-font>
        </slot>
      </dz-view>
    </dz-view>

    <template v-if="closedable">
      <dz-view one size="w-fit">
        <dz-icon size="4" icon="ic:round-close" color="text-gray-400" />
      </dz-view>
    </template>
  </dz-view>
</template>
