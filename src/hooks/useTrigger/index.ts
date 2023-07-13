const { findDefined } = useValidate();
import type { DzViewStateProps } from '@/types/dz-view';

export const useTrigger = (option = {}) => {
  const store = reactive<{
    state: { [index: BindCode]: DzViewStateProps };
    dom: any;
  }>({
    state: {},
    dom: {},
  });

  // prettier-ignore
  const initState =
    (code: BindCode) =>
    (option: DzViewStateProps = {}) => {
      store.state[code] = {
        fullscreen: findDefined([option.fullscreen, false]),
        loading   : findDefined([option.loading   , false]),
        visible   : findDefined([option.visible   , false]),
        required  : findDefined([option.required  , false]),
        disabled  : findDefined([option.disabled  , false]),
        error     : findDefined([option.error     , false]),
      };

      return store.state[code];
    };

  const bind =
    (code: BindCode) =>
    (option: DzViewStateProps = {}) => {
      if (store.dom[code])
        return {
          ref: el => (store.dom[code] = el),
          state: store.state[code],
        };

      return {
        ref: el => (store.dom[code] = el),
        state: initState(code)(option),
      };
    };

  const getState = (code: BindCode): DzViewStateProps =>
    store.dom[code]?.getState(option);
  const setState =
    (code: BindCode) =>
    (option: DzViewStateProps = {}) =>
      store.dom[code]?.setState(option);

  return [bind, setState, getState, { store }] as [
    (code: BindCode) => (option?: DzViewStateProps) => {
      ref: (el: any) => any;
      state: DzViewStateProps;
    },
    (code: BindCode) => (option?: DzViewStateProps) => any,
    (code: BindCode) => DzViewStateProps,
    any
  ];
};

type BindCode =
  | 'P1'
  | 'P2'
  | 'P3'
  | 'P4'
  | 'P5'
  | 'P6'
  | 'P7'
  | 'P8'
  | 'P9'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'B4'
  | 'B5'
  | 'B6'
  | 'B7'
  | 'B8'
  | 'B9'
  | string;
