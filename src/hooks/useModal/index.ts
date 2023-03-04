export const useModal = () => {
  const modalState = reactive({
    visible: false,
    loading: false,
    fullScreen: false,
  });

  const visible = computed(() => modalState.visible);
  const loading = computed(() => modalState.loading);
  const fullScreen = computed(() => modalState.fullScreen);

  const setVisible = ({ visible }) => {
    modalState.visible = visible;
  };

  const toggleVisible = () => {
    modalState.visible = !modalState.visible;
  };

  const setLoading = ({ loading }) => {
    modalState.loading = loading;
  };

  const toggleLoading = () => {
    modalState.loading = !modalState.loading;
  };

  const setFullScreen = ({ fullScreen }) => {
    modalState.fullScreen = fullScreen;
  };

  const toggleFullScreen = () => {
    modalState.fullScreen = !modalState.fullScreen;
  };

  return {
    visible,
    loading,
    fullScreen,

    toggleLoading,
    toggleVisible,
    setLoading,
    setVisible,
    setFullScreen,
    toggleFullScreen,
  };
};
