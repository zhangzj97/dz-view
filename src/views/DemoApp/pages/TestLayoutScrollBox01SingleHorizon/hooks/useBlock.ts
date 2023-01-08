export const useBlock = () => {
  const blockClassNameState = reactive<any>({ index: 0, w: 'w-4', h: 'h-4' });

  const handleChangeBlock = () => {
    const list = [
      { w: 'w-4', h: 'h-4' },
      //   { w: 'w-8', h: 'h-8' },
      //   { w: 'w-16', h: 'h-16' },
      //   { w: 'w-64', h: 'h-60' },
      { w: 'w-[400px]', h: 'h-20' },
      { w: 'w-[400px]', h: 'h-[1000px]' },
      { w: 'w-[2000px]', h: 'h-20' },
      { w: 'w-[2000px]', h: 'h-[1000px]' },
      { w: 'w-full', h: 'h-full' },
    ];
    const newIndex = (blockClassNameState.index + 1) % list.length;
    blockClassNameState.index = newIndex;
    blockClassNameState.h = list[newIndex].h;
    blockClassNameState.w = list[newIndex].w;
  };

  return {
    blockClassNameState,

    handleChangeBlock,
  };
};
