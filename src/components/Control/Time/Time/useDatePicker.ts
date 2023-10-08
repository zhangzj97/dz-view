export const useDatePicker = ({ props }) => {
  const datePickerEvents = {
    updateModelValue: (a, b, c, d) => {
      props.test && console.log('updateModelValue', { a, b, c, d });
    },
    updatePickerValue: (a, b, c, d) => {
      props.test && console.log('updatePickerValue', { a, b, c, d });
    },
    change: (a, b, c, d) => {
      props.test && console.log('change', { a, b, c, d });
    },
    select: (a, b, c, d) => {
      props.test && console.log('select', { a, b, c, d });
    },
    popupVisibleChange: (a, b, c, d) => {
      props.test && console.log('popupVisibleChange', { a, b, c, d });
    },
    ok: (a, b, c, d) => {
      props.test && console.log('ok', { a, b, c, d });
    },
    clear: (a, b, c, d) => {
      props.test && console.log('clear', { a, b, c, d });
    },
    selectShortcut: (a, b, c, d) => {
      props.test && console.log('selectShortcut', { a, b, c, d });
    },
    pickerValueChange: (a, b, c, d) => {
      props.test && console.log('pickerValueChange', { a, b, c, d });
    },
  };

  return {
    datePickerEvents,
  };
};
