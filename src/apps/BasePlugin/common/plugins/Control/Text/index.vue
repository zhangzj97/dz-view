<script setup lang="ts">
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

interface DzViewMouseProps {
  v?: 'mouse-gray';
}

interface DzFormItemProps {
  preset?: string;

  simple?: boolean;
}

interface DzFormSchemaProps {
  schema?: any;

  field: string | any;
  plugin: string | any;

  state?: any;

  layout?: any;
}

interface DzPluginControlProps {
  code?: any;
  state?: any;

  data?: any;
}

const props = withDefaults(
  defineProps<DzBaseProps & DzPluginControlProps>(),
  {}
);

const emit = defineEmits<{
  (e: 'onFocus', value: any): void;
  (e: 'onBlur', value: any): void;
}>();

const {
  plugin,

  onInput,
  onFocus,
  onBlur,

  getState,
  setState,
  getValue,
  setValue,
  validate,
} = usePluginControl({ props, emit });

const focus = () => {
  plugin.value.focus();
};
const blur = () => {
  plugin.value.blur();
};

const reset = () => {
  props.data.value[props.code] = null;
};

defineExpose({
  ...{ getState, setState, getValue, setValue, validate },
  ...{ focus, blur, reset },
});
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit" text="ControlInput">
      <input
        ref="plugin"
        :class="[
          'dz-plugin-control-text',
          state?.error &&
            'dz-plugin-control--error animate-[pulse_1s_ease-in-out_3]',
          state?.disabled && 'dz-plugin-control--disabled',
        ]"
        :disabled="state.disabled"
        :value="data.value[code]"
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
