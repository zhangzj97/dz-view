const { findDefined } = useValidate();
import type { DzViewStateProps } from '@/types/dz-view';

/**
 * @deprecated
 */
export const useStateStore = () => {
  const store = reactive<{
    state: { [index: string]: DzViewStateProps };
    dom: any;
  }>({
    state: {},
    dom: {},
  });

  // prettier-ignore
  const initState =
    (code: BindCode) =>
    (state: DzViewStateProps = {}) => {
      store.state[code] = {
        fullscreen: findDefined([state.fullscreen, false]),
        loading   : findDefined([state.loading   , false]),
        visible   : findDefined([state.visible   , false]),
        required  : findDefined([state.required  , false]),
        disabled  : findDefined([state.disabled  , false]),
        error     : findDefined([state.error     , false]),
      };

      return store.state[code];
    };

  const bind =
    (code: BindCode) =>
    (state: DzViewStateProps = {}) => {
      if (store.dom[code])
        return {
          state: store.state[code],
          ref: el => (store.dom[code] = el),
        };

      return {
        state: initState(code)(state),
        ref: el => (store.dom[code] = el),
      };
    };

  const getState = (code: BindCode): DzViewStateProps => store.dom[code]?.getState();
  const setState =
    (code: BindCode) =>
    (state: DzViewStateProps = {}) =>
      store.dom[code]?.setState(state);

  return { bind, setState, getState, store };
};

// prettier-ignore
type BindCode = 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'P7' | 'P8' | 'P9' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9';
