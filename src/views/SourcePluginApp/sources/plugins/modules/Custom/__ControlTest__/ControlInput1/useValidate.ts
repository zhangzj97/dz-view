export const useValidate = () => {
  const errorState = reactive<any>({
    error: false,
    visible: false,
    list: [],
  });

  const message = computed(() => {
    if (errorState.list.length > 0) {
      return errorState.list[0].message;
    } else {
      return '';
    }
  });

  const validate = ({ value, requiredValidate, rule }) => {
    errorState.list = [];
    if (!requiredValidate(value)) {
      errorState.list.push({ code: '500', message: '必填' });
    }

    rule.forEach(item => {
      const { pattern, message } = item;
      if (!value?.match(pattern)) {
        errorState.list.push({ code: '501', message });
      }
    });

    if (errorState.list.length > 0) {
      errorState.error = true;
      errorState.visible = true;
    } else {
      errorState.error = false;
      errorState.visible = false;
    }

    return errorState.list;
  };

  return {
    errorState,
    message,

    validate,
  };
};
