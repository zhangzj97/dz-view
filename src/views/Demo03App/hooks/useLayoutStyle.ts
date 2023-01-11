export const useLayoutStyle = () => {
  const layoutStyleStyle = reactive({
    visible: true,
  });

  const clickToggle = () => {
    layoutStyleStyle.visible = !layoutStyleStyle.visible;
  };

  return {
    layoutStyleStyle,
    clickToggle,
  };
};
