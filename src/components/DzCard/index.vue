<script setup lang="ts" name="view">
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

const props = withDefaults(
  defineProps<DzBaseProps & DzEntityProps & DzViewFlexProps>(),
  {}
);

const emit = defineEmits<{
  (e: 'update:state', value: any): void;
}>();
</script>

<template>
  <v class="dz-card v202301" :s="s" :w="w" col>
    <v v-if="title" s="w-grow h-fit">
      <v-space :s="icon ? 'w-2 h-grow' : 'w-4 h-grow'" />
      <v v-if="icon" s="w-10 h-grow">
        <v-icon v="10-50" :icon="icon" />
      </v>
      <v-text s="w-fit h-grow" :t="t" :text="title" />
      <v-space s="w-grow h-grow" />
      <v s="w-10 h-grow" v="mouse-gray">
        <v-icon v="10-50" icon="mdi:close" />
      </v>
    </v>
    <slot></slot>
    <slot name="footer">
      <v-space s="w-grow h-2" />
      <v s="w-grow h-fit" w="gap-2">
        <v-space s="w-grow h-grow" />
        <slot name="action">
          <v s="w-fit h-8" v="mouse-gray">
            <v-icon v="8-50" icon="mdi:close" />
            <v-text text="取消" />
            <v-space s="w-4 h-grow" />
          </v>
        </slot>
        <v-space s="w-0 h-grow" />
      </v>
      <v-space s="w-grow h-2" />
    </slot>
  </v>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
