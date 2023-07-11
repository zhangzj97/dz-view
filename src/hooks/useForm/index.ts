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

  const bind = (field, plugin) => {
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

  const setState = code => (key, value) => {
    schema.dom[code].setState(key, value);
  };

  const setValue = code => value => {
    schema.dom[code].setValue(key, value);
  };

  const validate = code => () => {
    schema.dom[code].validate(key, value);
  };

  return { schema, bind, setState, data };
};
