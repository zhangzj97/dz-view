<script setup lang="ts">
import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';

import type { DzBtnComponentProps, DzViewStateProps } from '@/types/dz-view';
type Payload = {
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  shape?: 'round' | 'circle' | 'square';
};
interface Props {
  code?: string;
  payload: Payload;
}
const props = withDefaults(defineProps<DzBtnComponentProps & Props>(), { payload: () => ({}) });

const emits = defineEmits<{
  'update:payload': [code?: string, payload?: Payload];
  'update:value': [code?: string, value?: unknown];
}>();

const getPayload = (): Payload => props.payload;
const setPayload = (payload: Payload) => emits('update:payload', props.code, payload);
defineExpose({ setPayload, getPayload });
</script>

<template>
  <Button
    :type="type"
    :shape="shape"
    :status="status"
    size="medium"
    :long="false"
    :loading="state?.loading"
    :disabled="state?.disabled"
  >
    <template v-if="icon" #icon>
      <slot name="icon">
        <v-icon v="4-100" :icon="icon" class="translate-y-[2px]" />
      </slot>
    </template>
    <slot>
      <v-text :text="title" />
    </slot>
  </Button>
</template>
