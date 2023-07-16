<script setup lang="ts">
import type { DzPluginControlProps, DzPluginControlEmits } from '@/types/dz-view'; // prettier-ignore
type Option = {};
type Event = {};
const props = withDefaults(defineProps<DzPluginControlProps<Option>>(), {});
const emit = defineEmits<DzPluginControlEmits & Event>();

const { isString, isNumber, isBoolean } = useValidate();
const getValue = (): string | null => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (isString(value) || isNumber(value) || isBoolean(value)) {
    newValue = String(value);
  }
  emit('update:value', newValue);
};

const { pluginDom, ExposeMethod, onInput, onFocus, onBlur, modelValue } =
  usePluginControl({
    props,
    emit,
    getValue,
    setValue,
  });
defineExpose({ ...ExposeMethod });

onMounted(() => {
  emit('update:value', null);
});
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <input
        ref="pluginDom"
        :class="[
          'dz-plugin-control-text',
          state?.error && 'dz-plugin-control--error',
          state?.disabled && 'dz-plugin-control--disabled',
        ]"
        type="text"
        :disabled="state.disabled"
        :value="modelValue"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </v>

    <v
      s="w-grow h-fit"
      w="min-h-[4px]"
      :trans="state.error ? 'max-h-[20px]' : 'max-h-[4px]'"
    >
      <v-text
        v-if="state?.error"
        t="text-red-500 text-sm"
        class="animate-[shakeX_1s_ease-in-out_1]"
        :text="validator?.result?.message"
      />
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
