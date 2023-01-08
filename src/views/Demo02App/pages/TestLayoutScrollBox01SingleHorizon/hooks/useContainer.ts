export const useContainer = () => {
  const containerClassNameState = reactive<any>({ index: 0, w: 'w-grow', h: 'h-80' });

  const handleChangeContainer = () => {
    const list = [
      { w: 'w-[500px]', h: 'h-80' },
      { w: 'w-[2000px]', h: 'h-64' },
    ];
    const newIndex = (containerClassNameState.index + 1) % list.length;
    containerClassNameState.index = newIndex;
    containerClassNameState.h = list[newIndex].h;
    containerClassNameState.w = list[newIndex].w;
  };

  return {
    containerClassNameState,

    handleChangeContainer,
  };
};
