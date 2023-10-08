<script setup lang="ts">
import PaneError from './PaneError.vue';
import PaneTest from './PaneTest.vue';

import type { DzControlComponentProps } from '@/types/dz-view';
interface Props {
  code: string;
  value: any;
  payload?: any;
  component?: any;
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
const setValue = (v: unknown) => {
  // 其实 这个是 refresh 行为
  el?.value?.setValue(v);
  console.log('发生了 refresh 行为');
};
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
    <v s="w-grow h-fit" row>
      <v s="w-2 h-grow">
        <v
          s="w-2 h-grow"
          class="bg-blue-300"
          :class="[value !== payload.defaultValue ? 'max-w-0' : 'max-w-[8px]']"
          trans
        ></v>
      </v>

      <v s="w-fit h-grow" col>
        <PaneError :code="code" :value="value" :payload="payload" />
      </v>
      <Component
        :is="component()"
        ref="el"
        :code="code"
        :value="value"
        :payload="payload"
        @update:value="onUpdateValue"
        @update:payload="onUpdatePayload"
      />
      <v s="w-fit h-grow" col>
        <PaneTest
          :code="code"
          :value="value"
          :payload="payload"
          @update:value="onUpdateValue"
          @update:payload="onUpdatePayload"
        />
      </v>
    </v>
  </v>
</template>

<style>
@import url(./index.scss);
</style>
