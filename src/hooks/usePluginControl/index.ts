import type { DzViewStateProps } from '@/types/dz-view';

const { debug } = useLog({ module: 'usePluginControl', color: 'blue' });

export const usePluginControl = ({
  props,
  emit,
  getValue = false as any,
  setValue = false as any,
}) => {
  const pluginDom = ref(null);

  const onUpdateValue = () => {
    debug('onUpdateValue');
  };
  const onInput = el => {
    debug('onInput');
    emit('update:value', el.target.value);
  };
  const onFocus = () => {
    debug('onFocus');
  };
  const onBlur = () => {
    debug('onBlur');
  };

  const getState = (): DzViewStateProps => props.state;
  const setState = (state: DzViewStateProps) => {
    Object.assign(props.state, state);
  };

  if (!getValue) getValue = (): any => props.value;
  if (!setValue) setValue = (value: any) => emit('update:value', value);

  const getOption = (): any => props.option;
  const setOption = (option: any) => {
    Object.assign(props.option, option);
  };

  const validate = (option = {}) => {
    const state = props.state;
    const { error } = option;
    const value = props.data.value[props.code];

    if (props.state?.required && value === undefined) {
      state.error = true;
      return false;
    } else if (props.state?.required && value === null) {
      state.error = true;
      return false;
    } else if (props.state?.required && value === '') {
      state.error = true;
      return false;
    } else if (
      props.state?.required &&
      Array.isArray(value) &&
      value.length === 0
    ) {
      state.error = true;
      return false;
    }

    state.error = false;
    return true;
  };

  const focus = () => pluginDom?.value?.focus();
  const blur = () => pluginDom?.value?.blur();
  const reset = () => emit('update:value', null);

  const modelValue = computed(() => getValue());

  const ExposeMethod = {
    getState,
    setState,
    getValue,
    setValue,
    getOption,
    setOption,
    validate,
    focus,
    blur,
    reset,
  };

  const CommonEvent = {
    onUpdateValue,
    onInput,
    onFocus,
    onBlur,
  };

  return {
    pluginDom,

    modelValue,
    ExposeMethod,
    ...CommonEvent,
  };
};
