export const useValidate = () => {
  const errorState = reactive<any>({
    list: [],
  });

  const error = computed(() => {
    return errorState.list?.[0] || {};
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

    return errorState.list;
  };

  return {
    error,

    validate,
  };
};
