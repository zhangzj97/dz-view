<script setup lang="ts">
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
  schema?: any;

  field: string | any;
  plugin: string | any;

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

const schemaFormated = reactive({
  field: {},
  plugin: {},
  state: {},
  layout: {},
});

const { debug } = useLog({ module: 'Form', color: 'blue' });

const isString = value => {
  return typeof value === 'string';
};

const isBoolean = value => {
  return typeof value === 'boolean';
};

const isUndefined = value => {
  return typeof value === 'undefined';
};

const isEmpty = value => {
  if (!Array.isArray(value)) return true;
  return value.length > 0;
};

const component = shallowRef(null);
const plugin = ref(null);

onMounted(() => {
  if (!plugins.Control[props.field.code]) {
    debug('错误: 没有 plugin: ', 'Form', props.field.code);
  } else {
    component.value = plugins.Control[props.field.code];
  }
});

// prettier-ignore
const pluginMethod  = {
    getState: code => async (       option = {}) => await schema.dom[code]?.getState(       option),
    setState: code => async (value, option = {}) => await schema.dom[code]?.setState(value, option),
    getValue: code => async (       option = {}) => await schema.dom[code]?.getValue(       option),
    setValue: code => async (value, option = {}) => await schema.dom[code]?.setValue(value, option),
    validate: code => async (       option = {}) => await schema.dom[code]?.validate(       option),
  }

defineExpose({
  ...pluginMethod,

  plugin,
});

const updateData = value => {
  console.log('dz-from-item', value);
};
</script>

<template>
  <v
    class="dz-form-item v202301"
    v-bind="props"
    :s="schemaFormated.state.visible ? props.s : 'w-0 h-0'"
    :w="schemaFormated.state.visible ? props.w : 'overflow-hidden'"
  >
    <!-- label -->
    <v s="w-16 h-grow">
      <v-space s="w-grow h-grow" />
      <v-text
        s="w-fit h-fit"
        :text="schemaFormated.field.title"
        class="self-start"
        trans="translate-y-1"
      />

      <v-text
        s="w-fit h-fit"
        t="text-red-500"
        text="*"
        class="self-start"
        :class="[schemaFormated.state.required ? 'opacity-100' : 'opacity-0']"
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
          :props="schemaFormated.plugin.props"
          :code="schemaFormated.field.code"
          :state="schemaFormated.state"
          :data="data"
          @update:data="updateData"
        />
      </slot>
    </v>
  </v>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
