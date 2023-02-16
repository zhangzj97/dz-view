import { isString } from '@vueuse/core';

export const useDzView = ({ props }) => {
  const wrapperClass = computed(() => {
    if (isString(props.wrapperClass)) {
      return props.wrapperClass;
    } else if (Array.isArray(props.wrapperClass)) {
      return props.wrapperClass.join(' ');
    } else {
      return '';
    }
  });

  return {
    wrapperClass,
  };
};
