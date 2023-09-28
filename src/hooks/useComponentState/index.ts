import type { DzViewStateProps } from '@/types/dz-view';

export const useComponentState = ({ props, emit }) => {
  const getState = (): DzViewStateProps => props.state;
  const setState = (state: DzViewStateProps) => {
    emit('update:state', props.code, state);
  };

  return { setState, getState };
};
