import type { DzViewStateProps } from '@/types/dz-view';

const { debug } = useLog({ module: 'useControlBase', color: 'blue' });

const { is } = useValidate();

export const useControlBase = <T>({
  props,
  emits,
  validate = null as any,
  getState = null as any,
  setState = null as any,
  getValue = null as any,
  setValue = null as any,
  getPayload = null as any,
  setPayload = null as any,
}) => {
  const el = ref<HTMLInputElement | null>(null);

  const onUpdateValue = () => {
    debug('onUpdateValue');
  };
  const onInput = async el => {
    emits('beforeInput');
    debug('onInput');
    await handleValue.set(el.target.value);
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
      emits('update:state', state);
    };

  if (getValue == null) getValue = (): unknown => props.value;
  if (setValue == null)
    setValue = (value: unknown) => {
      emits('update:value', value);
    };

  if (getPayload === null) getPayload = (): T => props.payload;
  if (setPayload === null) setPayload = (payload: any) => emits('update:payload', payload);

  if (validate == null)
    validate = (option = { error: true, failFast: true }) => {
      // const { state, value, validator } = props;
      // const { required } = state;
      // const { error, failFast } = option;

      const { value, payload } = props;
      const { required, validator } = payload;
      const { error, failFast } = option;

      const result = validator?.result || {
        error: false,
        message: null,
        list: [],
      };

      if (is.Empty(validator) && required !== true) {
        return result;
      }

      if (!validator) {
        props.validator = {
          result: {
            error: false,
            message: null,
            list: [],
          },
        };
      }

      if (required) {
        if (is.Null(value) || is.Undefined(value) || value === '') {
          validator.result.error = true;
          validator.result.message = '必填';
          validator.result.list.push({ message: '必填' });
          if (error) props.state.error = true;
          if (failFast) return validator.result;
        }
      }

      if (!is.Empty(validator.rule)) {
        validator.rule.forEach(item => {
          const { pattern, message } = item;
          if (!is.Undefined(value) && !is.Null(value) && !value.match(pattern)) {
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
  const clearNull = async () => {
    await handleValue.set(null);
    validate({ error: false });
  };

  const clearArray = async () => {
    await handleValue.set([]);
    validate({ error: false });
  };

  const undo = async () => {
    await handleValue.set(props.payload.defaultValue);
    validate({ error: false });
  };

  const refreshService = () => {};

  /**
   * @deprecated
   */
  const modelValue = computed(() => getValue());

  const methods = {
    getValue,
    setValue,
    getPayload,
    setPayload,
    validate,
    focus,
    blur,
    /**
     * @deprecated
     */
    reset: clearNull,
    clearNull,
    clearArray,
    undo,
    refreshService,
  };

  const events = {
    onUpdateValue,
    onInput,
    onFocus,
    onBlur,

    updateValue: onUpdateValue,
    input: onInput,
    focus: onFocus,
    blur: onBlur,
  };

  const handleValue = {
    set: async (value: unknown) => {
      if (is.Array(value)) {
        await emits('update:value', value);
      } else if (!is.Undefined(value)) {
        await emits('update:value', [value]);
      } else {
        await emits('update:value', []);
      }
    },
    diff: (diffValue: any) => {
      const value = props.value;

      if (is.Undefined(diffValue)) return false;
      if (!is.Array(diffValue)) return false;
      if (!is.Array(value)) return false;

      const v1 = [...diffValue].sort().join(',');
      const v2 = [...value].sort().join(',');

      return v1 !== v2;
    },
  };

  return {
    is,
    el,
    methods,
    events,

    getValue,
    setValue,

    handleValue,

    /**Todo
     * @deprecated
     */
    modelValue,

    /**Todo
     * @deprecated
     */
    exposeMethod: methods,
    /**Todo
     * @deprecated
     */
    commonEvent: events,

    /**Todo
     * @deprecated
     */
    ExposeMethod: methods,
    /**Todo
     * @deprecated
     */
    CommonEvent: events,
  };
};
