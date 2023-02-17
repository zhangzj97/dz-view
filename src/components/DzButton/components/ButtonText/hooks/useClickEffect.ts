export const useClickEffect = () => {
  const clickEffectState = reactive({
    afterOn: false,
  });

  const toggleClickEffect = () => {
    clickEffectState.afterOn = true;
    setTimeout(() => (clickEffectState.afterOn = false), 300);
  };

  return {
    toggleClickEffect,
    clickEffectState,
  };
};
