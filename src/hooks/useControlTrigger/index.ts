export const useControlTrigger = ({ props, emits }) => {
  const triggerStore = reactive<any>({
    value: [],
    version: { value: Date.now() },
  });

  const trigger = () => triggerStore;

  const handleTrigger = {
    set: (value: any) => {
      triggerStore.value = value;
      triggerStore.version.value = Date.now();
    },
  };

  return {
    trigger,

    handleTrigger,
  };
};
