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
  {
    s: 'w-grow h-grow',
  }
);

const schemaFormated = reactive({
  field: {},
  plugin: {},
  state: {},
  layout: {},
});

const { debug } = useLog({ module: 'Form', color: 'blue' });

const formatSchema = () => {
  schemaFormated.field = formatSchemaField();
  schemaFormated.plugin = formatSchemaPlugin();
  schemaFormated.state = formatSchemaState();
  schemaFormated.layout = formatSchemaLayout();

  debug('结束');
  console.log(schemaFormated);
};

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

const formatSchemaField = () => {
  let [code, alias, title] = [null, null, null, null] as any;
  if (isUndefined(props.field)) debug('错误: field 参数异常', 'Form', props);

  if (isString(props.field)) {
    code = props.field;
    alias = props.field;
    title = props.field;
  } else if (!isString(props.field)) {
    code = props.field.code;
    alias = props.field.alias || props.field.code;
    title = props.field.title || props.field.code;
  }

  return { code, alias, title };
};

const formatSchemaPlugin = () => {
  let [code, _props] = [null, null, null, null] as any;
  if (isUndefined(props.plugin)) debug('错误: plugin 参数异常', 'Form', props);

  if (isString(props.plugin)) {
    code = props.plugin;
    _props = {};
  } else if (!isString(props.plugin)) {
    code = props.plugin.code;
    _props = props.plugin.props || {};
  }

  // 智能优化
  if (!code.match(/\//)) {
    code = `BasePlugin/${code}`;
  }

  if (!plugins.Control[code]) {
    debug('错误: 没有 plugin: ', 'Form', code);
  } else {
    component.value = plugins.Control[code];
  }

  return { code, props: _props };
};

const formatSchemaState = () => {
  let [required, disabled, visible] = [null, null, null, null] as any;

  if (isUndefined(props.state)) {
    required = true;
    disabled = false;
    visible = true;
  } else if (!isUndefined(props.state)) {
    required = isUndefined(props.state.required) ? true : props.state.required;
    disabled = isUndefined(props.state.disabled) ? false : props.state.disabled;
    visible = isUndefined(props.state.visible) ? true : props.state.visible;
  }

  return { required, disabled, visible };
};

const formatSchemaLayout = () => {
  let [s] = [null, null, null, null] as any;

  if (isUndefined(props.layout)) {
    s = 'w-grow h-fit';
  } else if (!isUndefined(props.layout)) {
    s = isUndefined(props.layout.s) ? 'w-grow h-fit' : props.layout.s;
  }

  return { s };
};

onMounted(() => {
  formatSchema();
});

const setState = (key, value, option = {}) => {
  schemaFormated.state[key] = value;
};

const setValue = (value, option = {}) => {
  plugin.value.setValue(value);
};

defineExpose({
  setState,
  setValue,

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
          :data="data"
          :code="schemaFormated.field.code"
          @update:data="updateData"
        />
      </slot>
    </v>
  </v>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
