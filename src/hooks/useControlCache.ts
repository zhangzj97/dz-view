const { is } = useValidate();

export const useControlCache = ({ props, emits }) => {
  const cacheStore = reactive<any>({
    value: [],
    version: { value: Date.now() },
  });

  const handleCache = {
    set: (value: any) => {
      if (is.Array(value)) {
        cacheStore.value = value;
      } else if (!is.Undefined(value)) {
        cacheStore.value = [value];
      } else {
        cacheStore.value = [];
      }

      cacheStore.version.value = Date.now();
    },
  };

  return {
    cache: cacheStore,

    handleCache,
  };
};
