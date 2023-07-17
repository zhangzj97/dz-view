import type { DzViewStateProps } from '@/types/dz-view';

const { debug } = useLog({ module: 'usePluginControl', color: 'blue' });

const { isUndefined, isNull, isArrayExist } = useValidate();

export const usePluginControl = <T>({
  props,
  emits,
  getValue = null as any,
  setValue = null as any,
  validate = null as any,
}) => {
  const pluginDom = ref<HTMLInputElement | null>(null);

  const onUpdateValue = () => {
    debug('onUpdateValue');
  };
  const onInput = async el => {
    emits('beforeInput');
    debug('onInput');
    await emits('update:value', el.target.value);
    validate({ error: false });
    emits('afterInput');
  };
  const onFocus = () => {
    emits('beforeFocus');
    debug('onFocus');
    emits('afterFocus');
  };
  const onBlur = () => {
    emits('beforeBlur');
    validate();
    debug('onBlur');
    emits('afterBlur');
  };

  const getState = (): DzViewStateProps => props.state;
  const setState = (state: DzViewStateProps) => {
    Object.assign(props.state, state);
  };

  if (!getValue) getValue = (): unknown => props.value;
  if (!setValue) setValue = (value: unknown) => emits('update:value', value);

  const getOption = (): T => props.option;
  const setOption = (option: T) => {
    Object.assign(props.option, option);
  };

  if (!validate)
    validate = (option = { error: true, failFast: true }) => {
      const { state, value, validator } = props;
      const { required } = state;
      const { error, failFast } = option;

      validator.result = {
        error: false,
        message: null,
        list: [],
      };

      if (required) {
        if (isNull(value) || isUndefined(value) || value === '') {
          validator.result.error = true;
          validator.result.message = '必填';
          validator.result.list.push({ message: '必填' });
          if (error) props.state.error = true;
          if (failFast) return validator.result;
        }
      }

      if (isArrayExist(validator.rule)) {
        validator.rule.forEach(item => {
          const { pattern, message } = item;
          if (!isUndefined(value) && !isNull(value) && !value.match(pattern)) {
            validator.result.error = true;
            validator.result.message = message;
            validator.result.list.push({ message });
            if (error) props.state.error = true;
            if (failFast) return validator.result;
          }
        });
      }

      if (!validator.result.error) props.state.error = false;
      return validator.result;
    };

  const focus = () => pluginDom?.value?.focus();
  const blur = () => pluginDom?.value?.blur();
  const reset = () => {
    emits('update:value', null);
    validate({ error: false });
  };

  const refreshService = () => {};

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
    refreshService,
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
    CommonEvent,
  };
};
