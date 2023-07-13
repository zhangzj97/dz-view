import type { DzViewStateProps } from '@/types/dz-view';

export const useComponentState = ({ props, emit }) => {
  const getState = () => props.state;
  const setState = (option: DzViewStateProps) => {
    Object.assign(props.state, option);
    // TODO 思考
    // emit('update:state', state);
  };

  return { setState, getState };
};
