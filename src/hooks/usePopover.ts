export const usePopover = () => {
  const triggerRef = ref();
  const toggle = () => {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    triggerRef.value.dispatchEvent(event);
  };

  return {
    triggerRef,
    toggle,
  };
};
