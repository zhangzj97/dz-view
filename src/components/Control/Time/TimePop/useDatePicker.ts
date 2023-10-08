export const useDatePicker = () => {
  const datePickerEvents = {
    updateModelValue: () => {
      console.log('updateModelValue');
    },
    updatePickerValue: () => {
      console.log('updatePickerValue');
    },
    change: () => {
      console.log('change');
    },
    select: () => {
      console.log('select');
    },
    popupVisibleChange: () => {
      console.log('popupVisibleChange');
    },
    ok: () => {
      console.log('ok');
    },
    clear: () => {
      console.log('clear');
    },
    selectShortcut: () => {
      console.log('selectShortcut');
    },
    pickerValueChange: () => {
      console.log('pickerValueChange');
    },
  };

  return {
    datePickerEvents,
  };
};
