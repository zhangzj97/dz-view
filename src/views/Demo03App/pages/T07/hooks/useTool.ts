export const useTool = ({ optionMap }) => {
  const optionListState = reactive(optionMap);

  const optionState = reactive<any>({});

  const optionIndexState = reactive({});

  const handleAddIndex = key => {
    const oldIndex = optionIndexState[key];
    const listLength = optionListState[key].length;
    const newIndex = (oldIndex + 1) % listLength;

    optionIndexState[key] = newIndex;
    optionState[key] = optionListState[key][newIndex];
  };

  const handleChangeIndex = (key, index) => {
    // const oldIndex = testStyleIndexState[key];
    // const listLength = classNameListState[key].length;
    const newIndex = index;

    optionIndexState[key] = newIndex;
    optionState[key] = optionListState[key][newIndex];
  };

  return {
    handleAddIndex,
    handleChangeIndex,

    optionState,
    optionListState,
  };
};
