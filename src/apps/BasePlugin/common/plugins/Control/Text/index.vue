<script setup lang="ts">
import type { DzPluginControlComponentProps } from '@/types/dz-view';
interface Props {
  option: any;
}
const props = withDefaults(
  defineProps<DzPluginControlComponentProps & Props>(),
  {}
);
const emit = defineEmits<{
  'update:value': [value: any];
}>();

const { pluginDom, ExposeMethod, onInput, onFocus, onBlur } = usePluginControl({
  props,
  emit,
});
defineExpose({ ...ExposeMethod });

onMounted(() => {});
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <input
        ref="pluginDom"
        :class="[
          'dz-plugin-control-text',
          state?.error &&
            'dz-plugin-control--error animate-[pulse_1s_ease-in-out_3]',
          state?.disabled && 'dz-plugin-control--disabled',
        ]"
        :disabled="state.disabled"
        :value="value"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </v>
    <v s="w-grow h-8">
      <!-- {{ validator.result[0].msg }} -->
    </v>
  </v>
</template>

<style scoped lang="scss">
.dz-plugin-control-text {
  @apply w-full h-fit rounded pl-3 pr-5 py-1 transition-all;
  @apply bg-gray-100 hover:bg-gray-200 active:bg-gray-300;
  @apply outline-gray-300 focus:outline-blue-500 focus-visible:outline-blue-500;
  @apply cursor-auto;
  @apply text-black;
  &.dz-plugin-control--error {
    @apply bg-red-100 hover:bg-red-200 active:bg-red-300;
    @apply outline-red-300 focus:outline-red-500 focus-visible:outline-red-500;
    @apply cursor-auto;
    @apply text-black;
  }
  &.dz-plugin-control--disabled {
    @apply bg-gray-200 hover:bg-gray-200 active:bg-gray-200;
    @apply outline-gray-300 focus:outline-gray-500 focus-visible:outline-gray-500;
    @apply cursor-not-allowed;
    @apply text-gray-400;
  }
}
</style>
