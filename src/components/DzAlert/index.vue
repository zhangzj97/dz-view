<script setup lang="ts">
const props = defineProps<{
  title?: string;
  message?: string;

  closedable?: boolean;

  type?: 'success' | 'info' | 'warning' | 'error' | 'default';
  bg?: string;
  border?: string;
}>();

const typeState = reactive({
  option: {
    success: { icon: 'ic:round-check-circle-outline', bg: 'bg-green-50', border: 'border-green-300', iconColor: 'text-green-400', textColor: 'text-gray-800' },
    info: { icon: 'ic:outline-info', bg: 'bg-blue-50', border: 'border-blue-300', iconColor: 'text-blue-400', textColor: 'text-gray-800' },
    warning: { icon: 'ic:round-error-outline', bg: 'bg-yellow-50', border: 'border-yellow-300', iconColor: 'text-yellow-400', textColor: 'text-gray-800' },
    error: { icon: 'ic:outline-dangerous', bg: 'bg-red-50', border: 'border-red-300', iconColor: 'text-red-400', textColor: 'text-gray-800' },
    default: { icon: '', bg: 'bg-gray-50', border: 'border-gray-300', iconColor: 'text-gray-400', textColor: 'text-gray-800' },
  },
});

const typeOption = computed(() => {
  if (!props.type) return typeState.option.default;
  else if (!typeState.option[props.type]) return typeState.option.default;
  else return typeState.option[props.type];
});
</script>

<template>
  <dz-view row size="h-fit w-full" :wrapper-class="`p-2 ${typeOption.bg} ${typeOption.border} border-2 rounded `">
    <template v-if="typeOption.icon">
      <dz-view one size="w-fit">
        <dz-icon size="4" :icon="typeOption.icon" :color="typeOption.iconColor" />
      </dz-view>
    </template>

    <dz-view col size="w-grow" wrapper-class="pl-2">
      <template v-if="title">
        <dz-view col size="h-fit w-grow" position="4">
          <dz-font sm :color="typeOption.textColor">{{ title }}</dz-font>
        </dz-view>
      </template>

      <dz-view col size="h-fit w-grow" position="4">
        <slot>
          <dz-font xs :color="typeOption.textColor">{{ message }}</dz-font>
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
