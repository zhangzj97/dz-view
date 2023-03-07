<script setup lang="ts">
import FormItem from './components/FormItem/index.vue';

import { useSchemaForm } from './hooks/useSchemaForm';

const props = defineProps<{
  moduleName: string;
  schema: any[];

  option?: any;
  entity: any;

  versionMap?: any;
}>();

const schemaOption = reactive({
  required: false,
  readonly: false,
  visible: true,

  cellOption: {},

  labelOption: {
    size: 'w-48 h-12',
  },

  formItemOption: {
    layout: 'row',
    size: 'h-fit w-full',
  },

  controlOption: {
    size: 'w-grow h-12',
  },

  pluginOption: {
    cellPluginCode: '@SourcePluginApp/ControlInput1',
  },

  ...props.option,
});

const config = inject('config');
const { rawToFixedSchema } = useSchemaForm({
  moduleName: props.moduleName,
  option: schemaOption,
  config,
});

const schemaState = reactive<any>({
  version: new Date().getTime(),
  raw: null,
  fixed: [],
});

const refreshWhenSchemaUpdate = () => {
  schemaState.raw = props.schema;
  schemaState.fixed = rawToFixedSchema({ list: schemaState.raw });
  schemaState.version = new Date().getTime();
};

watch(() => props.schema, refreshWhenSchemaUpdate, { immediate: true });

const updateValueByCode = ({ code, beforeUpdate, afterUpdate }, value) => {
  beforeUpdate({}, value);
  emit('setValue', code, value);
  afterUpdate({}, value);
};

const emit = defineEmits<{
  (e: 'setValue', code: string, value: any): void;
}>();

provide('entity', props.entity);
</script>

<template>
  <dz-view grid size="h-fit">
    <slot>
      <template v-for="(item, index) of schemaState.fixed" :key="index">
        <FormItem
          :code="item.code"
          :component="item.component"
          :version="versionMap[item.code]"
          @updateValue="
            updateValueByCode(
              {
                code: item.code,
                beforeUpdate: item.beforeUpdate,
                afterUpdate: item.afterUpdate,
              },
              $event
            )
          "
        />
      </template>
    </slot>
  </dz-view>
</template>
