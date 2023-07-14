<script setup lang="ts">
defineOptions({ name: 'DzFormItem' });

import { plugins } from '@/resources/plugins';

import type {
  DzFromItemComponentProps,
  DzViewStateProps,
} from '@/types/dz-view';
interface Props {
  state: DzViewStateProps;
  field: any;
  pluginCode: string;
  pluginOption: any;
  value?: any;
  validtor?: any;
  formStyle?: any;
  tooltip?: any;
  data?: any;
}
const props = withDefaults(defineProps<DzFromItemComponentProps & Props>(), {});

const emit = defineEmits<{
  'update:state': [value: DzViewStateProps];
  'update:value': [value: any];
  'update:option': [value: any];
}>();

const { debug } = useLog({ module: 'Form', color: 'blue' });

onMounted(() => {
  const registerPlugin = () => {
    if (!plugins.Control[props.pluginCode]) {
      debug('错误: 没有 plugin: ', 'Form', props.pluginCode);
    } else {
      debug(`使用 plugin: ${props.pluginCode}`);
      pluginComponent.value = plugins.Control[props.pluginCode];
    }
  };
  registerPlugin();
});

const onUpdateValue = (value: any) => {
  emit('update:value', value);
};

const pluginComponent = shallowRef(null);
const pluginDom = ref(null);

const getState = () => pluginDom?.value?.getState();
const setState = (state: DzViewStateProps) => pluginDom.value?.setState(state);
const getValue = () => pluginDom?.value?.getValue();
const setValue = (value: any) => pluginDom?.value?.setValue(value);
const getOption = () => pluginDom?.value?.getOption();
const setOption = (value: any) => pluginDom?.value?.setOption(value);
const validate = () => pluginDom?.value?.validate();

defineExpose({
  pluginDom,
  getState,
  setState,
  getValue,
  setValue,
  getOption,
  setOption,
  validate,
});
</script>

<template>
  <v
    class="dz-form-item v202301"
    :s="state.visible ? s : 'w-0 h-0'"
    :w="state.visible ? w : 'overflow-hidden'"
  >
    <!-- label -->
    <v s="w-16 h-grow">
      <v-space s="w-grow h-grow" />
      <v-text
        s="w-fit h-fit"
        :text="field.title"
        class="self-start"
        trans="translate-y-1"
      />

      <v-text
        s="w-fit h-fit"
        t="text-red-500"
        text="*"
        class="self-start"
        :class="[state.required ? 'opacity-100' : 'opacity-0']"
        trans="translate-y-1"
      />
      <v-space s="w-2 h-grow" />
    </v>
    <!-- control -->
    <v s="w-grow h-fit">
      <Component
        :is="pluginComponent"
        ref="pluginDom"
        :code="field.code"
        :field="field"
        :option="pluginOption"
        :state="state"
        :formStyle="formStyle"
        :validtor="validtor"
        :value="value"
        :data="data"
        @update:value="onUpdateValue"
      />
    </v>
  </v>
</template>
