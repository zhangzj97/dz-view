<script setup lang="ts">
import { Input } from '@arco-design/web-vue';
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
  value?: any;
  state?: any;

  data?: any;
}

const props = withDefaults(defineProps<DzBaseProps & DzPluginControlProps>(), {
  s: 'w-grow h-grow',
});

const emit = defineEmits<{
  (e: 'update:data', value: any): void;
  (e: 'onFocus', value: any): void;
  (e: 'onBlur', value: any): void;
}>();

const plugin = ref(null);
const { debug } = useLog({ module: 'ControlInput', color: 'blue' });

const onInput = value => {
  debug(`[onInput      ] ${value}`);
};
const onChange = value => {
  debug(`[onChange     ] ${value}`);
};

const onPressEnter = value => {
  debug(`[onPressEnter ] ${value}`);
};

const onClear = value => {
  debug(`[onClear      ] ${value}`);
};

const onFocus = value => {
  debug(`[onFocus      ] ${value}`);
};

const onBlur = value => {
  debug(`[onBlur       ] ${value}`);
};

const onUpdateValue = value => {
  debug(`[onUpdateValue] ${value}`);
  props.data.value[props.code] = value;
  emit('update:data', props.data);
};

const setState = (key, value) => {};

const setValue = value => {
  debug(`[setValue     ] ${value}`);
  props.data.value[props.code] = value;
  emit('update:data', props.data);
};

const validate = () => {};

const focus = value => {
  plugin.value.focus(value);
};
const blur = value => {
  console.log(plugin.value);
  plugin.value.blur(value);
};

const clear = value => {
  plugin.value.clear(value);
};

defineExpose({
  setState,
  setValue,
  validate,

  focus,
  blur,
  clear,
});
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit" text="ControlInput">
      <Input
        ref="plugin"
        :modelValue="data.value[code]"
        allowClear
        :readonly="false"
        :error="false"
        placeholder="请输入"
        @update:modelValue="onUpdateValue"
        @input="onInput"
        @change="onChange"
        @pressEnter="onPressEnter"
        @clear="onClear"
        @focus="onFocus"
        @blur="onBlur"
      />
    </v>
    <v s="w-grow h-8" text="Msg"></v>
  </v>
</template>
