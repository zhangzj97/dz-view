export const useCell = () => {
  const props = defineProps<{
    position?: string;

    size?: string;
    wrapperClass?: string;

    field?: string;

    tooltip?: string;

    entity?: any;
  }>();

  return { props };
};
