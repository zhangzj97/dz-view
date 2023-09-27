<script setup lang="ts">
defineOptions({ name: 'DzBtn' });

import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';

import type { DzBtnComponentProps, DzViewStateProps } from '@/types/dz-view';

interface Props {
  code?: string;
  state?: DzViewStateProps;
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  shape?: 'round' | 'circle' | 'square';
}
const props = withDefaults(defineProps<DzBtnComponentProps & Props>(), {});

const emit = defineEmits<{
  'update:state': [code?: string, value?: DzViewStateProps];
}>();

const { setState, getState } = useComponentState({ props, emit });
defineExpose({ setState, getState });
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
