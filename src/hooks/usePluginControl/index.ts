import type { DzViewStateProps } from '@/types/dz-view';

const { debug } = useLog({ module: 'usePluginControl', color: 'blue' });

const { isUndefined, isNull, isArrayExist } = useValidate();

export const usePluginControl = <T>({
  props,
  emits,
  validate = null as any,

  getState = null as any,
  setState = null as any,
  getValue = null as any,
  setValue = null as any,
  getOption = null as any,
  setOption = null as any,
}) => {
  const el = ref<HTMLInputElement | null>(null);

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

  if (getState == null) getState = (): DzViewStateProps => props.state;
  if (setState == null)
    setState = (state: DzViewStateProps) => {
      Object.assign(props.state, state);
    };

  if (getValue == null) getValue = (): unknown => props.value;
  if (setValue == null) setValue = (value: unknown) => emits('update:value', value);

  if (getOption == null) getOption = (): T => props.option;
  if (setOption == null)
    setOption = (option: T) => {
      Object.assign(props.option, option);
    };

  if (validate == null)
    validate = (option = { error: true, failFast: true }) => {
      const { state, value, validator } = props;
      const { required } = state;
      const { error, failFast } = option;

      if (!validator) {
        return [];
      }

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

  const focus = () => el?.value?.focus();
  const blur = () => el?.value?.blur();
  const reset = () => {
    emits('update:value', null);
    validate({ error: false });
  };

  const refreshService = () => {};

  const modelValue = computed(() => getValue());

  /**
   * @deprecated
   */
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

  /**
   * @deprecated
   */
  const CommonEvent = {
    onUpdateValue,
    onInput,
    onFocus,
    onBlur,
  };

  const exposeMethod = {
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

  const commonEvent = {
    onUpdateValue,
    onInput,
    onFocus,
    onBlur,
  };

  return {
    el,

    modelValue,

    exposeMethod,
    commonEvent,

    ExposeMethod,
    CommonEvent,
  };
};
