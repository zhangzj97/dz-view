export const useModal = () => {
  const modalState = reactive<any>({
    visible: false,
    loading: false,
    fullScreen: false,
  });

  const triggerDom = ref();
  const toggleTrigger = () => {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    triggerDom.value.dispatchEvent(event);
  };

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
    triggerDom,

    toggleLoading,
    toggleVisible,
    setLoading,
    setVisible,
    setFullScreen,
    toggleFullScreen,

    toggleTrigger,
  };
};
