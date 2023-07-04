export const useModal = () => {
  const state = reactive({
    visible: false,
    fullscreen: false,
    loading: false,
    disabled: false,
  });

  const setVisible = value => {
    state.visible = value;
  };
  const setFullscreen = value => {
    state.fullscreen = value;
  };
  const setLoading = value => {
    state.loading = value;
  };
  const setDisabled = value => {
    state.disabled = value;
  };

  const toggleVisible = () => {
    state.visible = !state.visible;
  };
  const toggleFullscreen = () => {
    state.fullscreen = !state.fullscreen;
  };
  const toggleLoading = () => {
    state.loading = !state.loading;
  };
  const toggleDisabled = () => {
    state.disabled = !state.disabled;
  };

  return {
    state,

    setVisible,
    setFullscreen,
    setLoading,
    setDisabled,

    toggleVisible,
    toggleFullscreen,
    toggleLoading,
    toggleDisabled,
  };
};
