export const useForm = ({ module }) => {
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

  const bind =
    field =>
    (plugin, option = {}) => {
      let [code] = [null];
      if (typeof field === 'string') {
        code = field;
      } else {
        code = field.code;
      }
      return {
        ref: el => {
          schema.dom[code] = el;
        },
        field,
        plugin,
        state: schema.state[code] || {},
        layout: schema.layout[code] || {},
        tooltip: schema.tooltip[code] || {},
        validator: schema.validator[code] || {},

        data: data,
      };
    };

  const setState = code => (value, option) => {
    schema.dom[code].setState(value, option);
  };

  const setValue = code => (value, option) => {
    schema.dom[code].setValue(value, option);
  };

  const getValue = code => {
    return data.value[code];
  };

  const validate = code => async option => {
    return await schema.dom[code].validate(option);
  };

  const itemVm = code => schema.dom[code].plugin;

  return {
    schema,
    data,
    bind,
    setState,
    setValue,
    getValue,
    validate,

    itemVm,
  };
};
