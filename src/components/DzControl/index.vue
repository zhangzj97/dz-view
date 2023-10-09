<script setup lang="ts">
import PaneError from './components/PaneError.vue';
import PaneTest from './components/PaneTest.vue';

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

const { is } = useValidate();

const onUpdateValue = async (value: any) => {
  console.log(' DzControl', value);
  await emits('update:value', props.code, value);
  console.log(' DzControl', props.value);
};
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

const computedIsDiff = computed(() => {
  const { defaultValue } = props.payload;
  const value = props.value;

  if (is.Undefined(defaultValue)) return false;
  if (!is.Array(defaultValue)) return false;
  if (!is.Array(value)) return false;

  const v1 = [...defaultValue].sort().join(',');
  const v2 = [...value].sort().join(',');

  return v1 !== v2;
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
      <v s="w-3 h-grow">
        <v s="w-2 h-grow" :class="[computedIsDiff ? 'scale-100' : 'scale-0', 'bg-blue-300', 'rounded-lg']" trans></v>
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
          v-if="payload.test"
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
@import url(./assets/index.scss);
</style>
