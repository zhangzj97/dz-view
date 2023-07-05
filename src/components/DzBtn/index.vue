<script setup lang="ts">
import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';

interface DzBaseProps {
  s?: string;
  w?: string;
  t?: string;
  trans?: boolean | string;
}

interface DzViewTextProps {
  text?: string;
}

interface DzEntityProps {
  id?: string;
  icon?: string;
  avatar?: string;
  title?: string;
  bg?: string;
}

interface DzViewFlexProps {
  row?: boolean;
  col?: boolean;

  grid?: boolean;
}

interface DzViewPositionProps {
  absolute?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br'
    | string;
  fixed?: string;
}

interface DzViewCursorProps {
  pointer?: boolean;
}

interface DzViewSpaceProps {
  space?: boolean;
}

interface DzViewTestProps {
  desc?: string;
}

interface DzPopoverProps {
  state?: any;
  cache?: boolean;
}

interface DzModalProps {
  state?: any;
  cache?: boolean;
}

interface DzDrawerProps {
  state?: any;
  cache?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

interface DzBtnProps {
  state?: any;
  cache?: boolean;

  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  shape?: 'round' | 'circle' | 'square';
}

withDefaults(
  defineProps<DzBaseProps & DzEntityProps & DzViewFlexProps & DzBtnProps>(),
  { cache: false, shape: 'square' }
);
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
