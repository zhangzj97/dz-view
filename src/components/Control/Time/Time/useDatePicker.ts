export const useDatePicker = () => {
  const datePickerEvents = {
    updateModelValue: (a, b, c, d) => {
      console.log('updateModelValue', console.log({ a, b, c, d }));
    },
    updatePickerValue: (a, b, c, d) => {
      console.log('updatePickerValue', console.log({ a, b, c, d }));
    },
    change: (a, b, c, d) => {
      console.log('change', console.log({ a, b, c, d }));
    },
    select: (a, b, c, d) => {
      console.log('select', console.log({ a, b, c, d }));
    },
    popupVisibleChange: (a, b, c, d) => {
      console.log('popupVisibleChange', console.log({ a, b, c, d }));
    },
    ok: (a, b, c, d) => {
      console.log('ok', console.log({ a, b, c, d }));
    },
    clear: (a, b, c, d) => {
      console.log('clear', console.log({ a, b, c, d }));
    },
    selectShortcut: (a, b, c, d) => {
      console.log('selectShortcut', console.log({ a, b, c, d }));
    },
    pickerValueChange: (a, b, c, d) => {
      console.log('pickerValueChange', console.log({ a, b, c, d }));
    },
  };

  return {
    datePickerEvents,
  };
};
