// TODO
// 关于 props 双向绑定的问题

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

const findDefined = list => list.find(item => !isUndefined(item));

const { debug } = useLog({ module: 'ControlInput', color: 'blue' });

export const usePluginControl = ({ props, emit }) => {
  const plugin = ref(null);

  const onUpdateData = () => {
    debug('onUpdateData');
  };
  const onUpdateValue = () => {
    debug('onUpdateValue');
  };
  const onInput = el => {
    debug('onInput');
    props.data.value[props.code] = el.target.value;
  };
  const onFocus = () => {
    debug('onFocus');
  };
  const onBlur = () => {
    debug('onBlur');
  };

  const getState = (option = {}) => props.state;
  const setState = (value, option = {}) => {
    const state = props.state;
    const { required, disabled, visible, error } = value;

    !isUndefined(required) && (state.required = required);
    !isUndefined(disabled) && (state.disabled = disabled);
    !isUndefined(visible) && (state.visible = visible);
    !isUndefined(error) && (state.error = error);
    debug('setState');
  };

  const getValue = (option = {}) => props.data.value[props.code];
  const setValue = (value, option = {}) => {
    debug('setValue');

    props.data.value[props.code] = value;
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

  return {
    plugin,

    getState,
    setState,
    getValue,
    setValue,
    validate,

    onUpdateData,
    onUpdateValue,
    onInput,
    onFocus,
    onBlur,
  };
};
