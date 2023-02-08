export const useFormItem = () => {
  const props = defineProps<{
    position?: string;

    size?: string;
    wrapperClass?: string;

    label?: string;
    value?: string;

    tooltip?: string;
  }>();

  return { props };
};
