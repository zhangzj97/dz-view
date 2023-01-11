export const useTestStyle = () => {
  const classNameListState = reactive({
    layout: ['111', '131', 't1', 't2'],
    height: ['h-0', 'h-16', 'h-96', 'h-auto', 'h-full', 'h-fit', 'h-max', 'h-min'],
    width: ['w-0', 'w-16', 'w-96', 'w-auto', 'w-full', 'w-fit', 'w-max', 'w-min'],
    flexGrow: ['flex-grow-0', 'flex-grow'],
  });

  const testStyleState = reactive({
    layout: 't2',
    height: '',
    width: '',
    flexGrow: '',
  });

  const testStyleIndexState = reactive({
    layout: 0,
    height: 0,
    width: 0,
    flexGrow: 0,
  });

  const handleAddIndex = styleName => {
    const oldIndex = testStyleIndexState[styleName];
    const listLength = classNameListState[styleName].length;
    const newIndex = (oldIndex + 1) % listLength;

    testStyleIndexState[styleName] = newIndex;
    testStyleState[styleName] = classNameListState[styleName][newIndex];
  };

  const handleChangeIndex = (styleName, index) => {
    // const oldIndex = testStyleIndexState[styleName];
    // const listLength = classNameListState[styleName].length;
    const newIndex = index;

    testStyleIndexState[styleName] = newIndex;
    testStyleState[styleName] = classNameListState[styleName][newIndex];
  };

  return {
    handleAddIndex,
    handleChangeIndex,

    testStyleState,
    classNameListState,
  };
};
