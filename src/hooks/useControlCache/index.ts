export const useControlCache = ({ props, emits }) => {
  const cacheStore = reactive<any>({
    value: [],
    version: { value: Date.now() },
  });

  const handleCache = {
    set: (value: unknown[]) => {
      cacheStore.value = value;
      cacheStore.version.value = Date.now();
    },
  };

  return {
    cache: cacheStore,

    handleCache,
  };
};
