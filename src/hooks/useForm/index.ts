const { findDefined } = useValidate();
import type { DzViewStateProps } from '@/types/dz-view';

export const useForm = ({ schema = {}, service = '' }, option = {}) => {
  const store = reactive({
    state: {},

    field: {},
    pluginCode: {},
    pluginOption: {},

    tooltip: {},
    validator: {},

    value: {},

    dom: {},
  });

  // prettier-ignore
  const initField =
    (code: string) =>
    (pluginCode, pluginOption = {}) => 
    (state, option = {}) => {
      store.field[code] = {
        code : findDefined([code,                                                        ]),
        alias: findDefined([      schema?.[code]?.field?.alias, option?.field?.alias, code]),
        title: findDefined([      schema?.[code]?.field?.title, option?.field?.title, code]),
      };
      return store.field[code];
    };

  // prettier-ignore
  const initPluginCode =
    (code: string) =>
    (pluginCode, pluginOption = {}) => 
    (state, option = {}) => {
      const pluginFullname = pluginCode.match(/\//g) ? pluginCode : `BasePlugin/${pluginCode}`;
      store.pluginCode[code] = findDefined([pluginFullname, schema?.[code]?.pluginCode, 'BasePlugin/Text']);
      return store.pluginCode[code];
    };

  // prettier-ignore
  const initPluginOption =
    (code: string) =>
    (pluginCode, pluginOption = {}) => 
    (state, option = {}) => {
      store.pluginOption[code] = findDefined([pluginOption, schema?.[code]?.pluginOption, {}]);
      return store.pluginCode[code];
    }

  // prettier-ignore
  const initValidator =
    (code: string) =>
    (pluginCode, pluginOption = {}) => 
    (state, option = {}) => {
      console.log(option?.validtor?.rule, 9999)
      store.validator[code] = {
        result: findDefined([{ error: false, message: null, list: [] }]),
        rule  : findDefined([option?.validator?.rule, schema?.[code]?.validator.rule, []])
      }
      console.log(store.validator[code])

      return store.validator[code];
    }

  // prettier-ignore
  const initState =
    (code: string) =>
    (pluginCode, pluginOption = {}) => 
    (state, option = {}) => {
      store.state[code] = {
        required : findDefined([state?.required, schema?.[code]?.state?.required, false]),
        disabled : findDefined([state?.disabled, schema?.[code]?.state?.disabled, false]),
        visible  : findDefined([state?.visible , schema?.[code]?.state?.visible , true ]),
        error    : findDefined([state?.error   , schema?.[code]?.state?.error   , false]),
      };
      return store.state[code];
    };

  // prettier-ignore
  const initValue =
    (code: string) =>
    (pluginCode, pluginOption = {}) =>
    (state, option = {}) => {
      store.value[code] = findDefined([schema?.[code]?.value, option?.value]);
      return store.value[code];
    };

  // prettier-ignore
  const initData =
    (code: string) =>
    (pluginCode, pluginOption = {}) =>
    (state, option = {}) => {
      return store.value;
    };

  // prettier-ignore
  const bind =
    (code: string) =>
    (pluginCode, pluginOption = {}) =>
    (state, option = {}) => {
      if (store.dom[code])
        return {
          field        : store.field[code],
          pluginCode   : store.pluginCode[code],
          pluginOption : store.pluginOption[code],
          validator    : store.validator[code],
          state        : store.state[code],
          value        : store.value[code],
          data         : store.value,
          ref          : el => (store.dom[code] = el),
          'onUpdate:value': (value: any) => store.value[code] = value
        };

      return {
        field        : initField(       code)(pluginCode, pluginOption)(state, option),
        pluginCode   : initPluginCode(  code)(pluginCode, pluginOption)(state, option),
        pluginOption : initPluginOption(code)(pluginCode, pluginOption)(state, option),
        validator    : initValidator(   code)(pluginCode, pluginOption)(state, option),
        state        : initState(       code)(pluginCode, pluginOption)(state, option),
        value        : initValue(       code)(pluginCode, pluginOption)(state, option),
        data         : initData(        code)(pluginCode, pluginOption)(state, option),
        ref          : el => (store.dom[code] = el),
        'onUpdate:value': (value: any) => store.value[code] = value
      };
    };

  const getState = (code: string): DzViewStateProps =>
    store.dom[code]?.getState();
  const setState =
    (code: string) =>
    (state: DzViewStateProps = {}) =>
      store.dom[code]?.setState(state);
  const getValue = code => store.dom[code]?.getValue(option);
  const setValue =
    code =>
    (value, option = {}) => {
      store.dom[code]?.setValue(value);
    };
  const getOption = code => store.dom[code]?.getOption(option);
  const setOption =
    code =>
    (value, option = {}) =>
      store.dom[code]?.setOption(value, option);

  const validate =
    code =>
    (option = {}) =>
      store.dom[code]?.validate(option);

  const pluginDom = code => store.dom[code].pluginDom;

  return {
    bind,

    pluginDom,

    setState,
    getState,
    setValue,
    getValue,
    setOption,
    getOption,
    validate,

    store,
  };
};
