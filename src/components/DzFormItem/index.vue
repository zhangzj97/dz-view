<script setup lang="ts">
defineOptions({ name: 'DzFormItem' });

import { plugins } from '@/resources/plugins';

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
  field: any;
  plugin: any;
  state?: any;

  layout?: any;
}

interface DzFormDataProps {
  value?: any;

  data?: any;
}

const props = withDefaults(
  defineProps<
    DzBaseProps &
      DzViewFlexProps &
      DzEntityProps &
      DzViewPositionProps &
      DzViewCursorProps &
      DzViewSpaceProps &
      DzViewTextProps &
      DzFormItemProps &
      DzFormSchemaProps &
      DzFormDataProps
  >(),
  {}
);

const { debug } = useLog({ module: 'Form', color: 'blue' });

const component = shallowRef(null);
const plugin = ref(null);

onMounted(() => {
  if (!plugins.Control[props.plugin.code]) {
    debug('错误: 没有 plugin: ', 'Form', props.plugin.code);
  } else {
    debug(`使用 plugin: ${props.plugin.code}`);
    component.value = plugins.Control[props.plugin.code];
  }
});

// prettier-ignore
const pluginMethod  = {
    getState: (       option = {}) => plugin.value?.getState(       option),
    setState: (value, option = {}) => plugin.value?.setState(value, option),
    getValue: (       option = {}) => plugin.value?.getValue(       option),
    setValue: (value, option = {}) => plugin.value?.setValue(value, option),
    validate: (       option = {}) => plugin.value?.validate(       option),
  }

defineExpose({
  ...pluginMethod,

  plugin,
});
</script>

<template>
  <v
    class="dz-form-item v202301"
    :s="props.state.visible ? props.s : 'w-0 h-0'"
    :w="props.state.visible ? props.w : 'overflow-hidden'"
  >
    <!-- label -->
    <v s="w-16 h-grow">
      <v-space s="w-grow h-grow" />
      <v-text
        s="w-fit h-fit"
        :text="props.field.title"
        class="self-start"
        trans="translate-y-1"
      />

      <v-text
        s="w-fit h-fit"
        t="text-red-500"
        text="*"
        class="self-start"
        :class="[props.state.required ? 'opacity-100' : 'opacity-0']"
        trans="translate-y-1"
      />
      <v-space s="w-2 h-grow" />
    </v>
    <!-- control -->
    <v s="w-grow h-fit">
      <slot>
        <Component
          :is="component"
          ref="plugin"
          :code="props.field.code"
          :field="props.field"
          :option="props.plugin.option"
          :state="props.state"
          :data="props.data"
        />
      </slot>
    </v>
  </v>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
