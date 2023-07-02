export const useForm = () => {
  const form = ref<HTMLInputElement | null>(null);
  const formItem = ref<any>({});

  const refFromItem = (el: any, key) => {
    return (el, key) => {
      el && (formItem[key] = el);
    };
  };

  return {
    form,
    formItem,
    refFromItem,
  };
};
