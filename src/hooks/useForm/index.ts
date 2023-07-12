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

const { debug } = useLog({ module: 'Form', color: 'blue' });

export const useForm = ({ module }, option = {}) => {
  const schema = reactive({
    field: {},
    state: {},
    plugin: {},
    layout: {},
    tooltip: {},
    validator: {},
    dom: {},
  });

  const data = reactive({
    value: {},
  });

  // prettier-ignore
  const bindField =
    code =>
    (pluginCode, option = {}) => {
      schema.field[code] = {
        code : findDefined([code, option.field?.code       ]),
        alias: findDefined([      option.field?.alias, code]),
        title: findDefined([      option.field?.title, code]),
      };
      return schema.field[code];
    };

  // prettier-ignore
  const bindPlugin =
  code =>
  (pluginCode, option = {}) => {
    const pluginFullname = pluginCode.match(/\//g) ? pluginCode : `BasePlugin/${pluginCode}`;

    schema.plugin[code] = {
      code : findDefined([pluginFullname,                       'BasePlugin/Text']),
      props: findDefined([                option.plugin?.props, {}               ])
    };

    return schema.plugin[code];
  };

  // prettier-ignore
  const bindState =
    code =>
    (pluginCode, option = {}) => {
      schema.state[code] = {
        required : findDefined([option.state?.required, false]),
        disabled : findDefined([option.state?.disabled, false]),
        visible  : findDefined([option.state?.visible , true ]),
        error    : findDefined([option.state?.error   , false]),
      };

      return schema.state[code];
    };

  const bindData =
    code =>
    (pluginCode, option = {}) => {
      data.value[code] = null;

      return data;
    };

  const bind =
    code =>
    (pluginCode, option = {}) => {
      // prettier-ignore
      return {
        ref   : el => (schema.dom[code] = el),

        field : bindField(code)(pluginCode, option),
        plugin: bindPlugin(code)(pluginCode, option),
        state : bindState(code)(pluginCode, option),

        data: bindData(code)(pluginCode, option),
        };
    };

  const getState = code => schema.dom[code]?.getState(option);
  const setState =
    code =>
    (value, option = {}) =>
      schema.dom[code]?.setState(value, option);
  const getValue = code => schema.dom[code]?.getValue(option);
  const setValue =
    code =>
    (value, option = {}) =>
      schema.dom[code]?.setValue(value, option);
  const validate =
    code =>
    (option = {}) =>
      schema.dom[code]?.validate(option);

  const itemVm = code => schema.dom[code].plugin;

  return {
    schema,
    data,
    bind,

    getState,
    setState,
    getValue,
    setValue,
    validate,

    itemVm,
  };
};
