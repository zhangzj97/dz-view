<script setup lang="ts">
defineOptions({ name: 'DzBtn' });

import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';

import type { DzBtnComponentProps } from '@/types/dz-view';
type Payload = {
  size?: 'mini' | 'medium' | 'large' | 'small';
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  shape?: 'round' | 'circle' | 'square';
  long?: boolean;
  loading?: boolean;
  disabled?: boolean;
  iconClass?: string;
};
type Props = {
  code?: string;
  payload?: Payload;
};
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
  <v v-if="icon && !title" s="w-fit h-fit" class="mouse-gray">
    <v-icon
      :s="s || 'w-8 h-8'"
      :icon="icon"
      :class="payload.iconClass || 'scale-50'"
      :style="{ borderRadius: 'var(--border-radius-small)' }"
    />
  </v>
  <Button
    v-else
    :size="payload.size"
    :type="payload.type"
    :shape="payload.shape"
    :status="payload.status"
    :long="payload.long"
    :loading="payload.loading"
    :disabled="payload.disabled"
  >
    <template v-if="icon" #icon>
      <slot name="icon">
        <v-icon s="w-4 h-4" :icon="icon" class="translate-y-[2px]" />
      </slot>
    </template>
    <slot>
      <v-text :text="title" />
    </slot>
  </Button>
</template>
