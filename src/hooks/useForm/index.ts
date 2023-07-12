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
      schema.field[code] = {};
      schema.field[code].code  = findDefined([code, option.field?.code      ]);
      schema.field[code].alias = findDefined([      option.field?.alias, code]);
      schema.field[code].title = findDefined([      option.field?.title, code]);
      return schema.field;
    };

  // prettier-ignore
  const bindPlugin =
  code =>
  (pluginCode, option = {}) => {
    const pluginFullname = pluginCode.match(/\//g) ? pluginCode : `BasePlugin/${pluginCode}`;

    schema.plugin[code] = {};
    schema.plugin[code].code  = findDefined([pluginFullname,                       'BasePlugin/Text']);
    schema.plugin[code].props = findDefined([                option.plugin?.props, {}               ]);

    return schema.plugin;
  };

  // prettier-ignore
  const bindState =
    code =>
    (pluginCode, option = {}) => {
      schema.state[code] = {};
      schema.state[code].required = findDefined([option.state?.required, false]);
      schema.state[code].disabled = findDefined([option.state?.disabled, false]);
      schema.state[code].visible  = findDefined([option.state?.visible , true ]);
      schema.state[code].error    = findDefined([option.state?.error   , false]);

      return schema.state;
    };

  const bind =
    code =>
    (pluginCode, option = {}) => {
      return {
        ref: el => (schema.dom[code] = el),

        field: bindField(code)(pluginCode, option),
        plugin: bindPlugin(code)(pluginCode, option),
        state: bindState(code)(pluginCode, option),

        dom: data,
      };
    };

  // prettier-ignore
  const itemVmMethod  = {
    getState: code => async (       option = {}) => await schema.dom[code]?.getState(       option),
    setState: code => async (value, option = {}) => await schema.dom[code]?.setState(value, option),
    getValue: code => async (       option = {}) => await schema.dom[code]?.getValue(       option),
    setValue: code => async (value, option = {}) => await schema.dom[code]?.setValue(value, option),
    validate: code => async (       option = {}) => await schema.dom[code]?.validate(             ),
  }

  const itemVm = code => schema.dom[code].plugin;

  return {
    schema,
    data,
    bind,

    ...itemVmMethod,

    itemVm,
  };
};
