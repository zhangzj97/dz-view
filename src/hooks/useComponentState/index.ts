import type { DzViewStateProps } from '@/types/dz-view';

const { findDefined } = useValidate();

export const useComponentState = ({ props, emit }) => {
  const state = reactive<DzViewStateProps>({});

  // Todo
  //   const store = reactive({
  //     state: {},
  //   });

  const getState = () => state;
  const setState = (option: DzViewStateProps) => {
    const _state = {
      visible: findDefined([option.visible, state.visible, true]),
      loading: findDefined([option.loading, state.loading, false]),
      disabled: findDefined([option.disabled, state.disabled, false]),
      fullscreen: findDefined([option.fullscreen, state.fullscreen, false]),
      required: findDefined([option.required, state.required, false]),
      error: findDefined([option.error, state.error, false]),
    };

    emit('update:state', _state);
  };

  defineExpose({ getState, setState });

  return { setState, getState };
};
