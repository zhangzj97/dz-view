<script setup lang="ts">
import ControlWrapper from './ControlWrapper.vue';

import type { DzControlComponentProps } from '@/types/dz-view';
interface Props {
  code: string;
  value: any;
  payload: any;
  component: any;
}
const props = withDefaults(defineProps<DzControlComponentProps & Props>(), { payload: () => ({}) });
const emits = defineEmits<{
  'update:payload': [code: string, payload: any];
  'update:value': [code: string, value: any];
}>();

const onUpdateValue = (value: any) => emits('update:value', props.code, value);
const onUpdatePayload = (payload: any) => emits('update:payload', props.code, payload);

const el = ref<HTMLLIElement | null | any>(null);

const getValue = () => el?.value?.getValue();
const setValue = (v: unknown) => el?.value?.setValue(v);
const getPayload = () => el?.value?.getPayload();
const setPayload = (option: any) => el?.value?.setPayload(option);
const validate = (option: any) => el?.value?.validate(option);

defineExpose({
  el,
  getValue,
  setValue,
  getPayload,
  setPayload,
  validate,
});
</script>

<template>
  <v
    class="dz-control v202301"
    :s="payload.visible !== false ? s : 'w-0 h-0'"
    :w="payload.visible !== false ? w : 'overflow-hidden'"
  >
    <!-- label -->
    <v s="w-16 h-grow">
      <v-space s="w-grow h-grow" />
      <v-text s="w-fit h-fit" :text="code || payload.title" class="self-start" trans="translate-y-1" />
      <v-text
        s="w-fit h-fit"
        t="text-red-500"
        text="*"
        class="self-start"
        :class="[payload.required ? 'opacity-100' : 'opacity-0']"
        trans="translate-y-1"
      />
      <v-space s="w-2 h-grow" />
    </v>
    <!-- control -->
    <v s="w-grow h-fit">
      <ControlWrapper
        :code="code"
        :value="value"
        :payload="payload"
        @update:value="onUpdateValue"
        @update:payload="onUpdatePayload"
      >
        <Component
          :is="component"
          ref="el"
          :code="code"
          :value="value"
          :payload="payload"
          @update:value="onUpdateValue"
          @update:payload="onUpdatePayload"
        />
      </ControlWrapper>
    </v>
  </v>
</template>

<style>
@import url(./index.scss);
</style>
