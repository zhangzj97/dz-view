export const useNoticeStyle = () => {
  const noticeStyleState = reactive({
    height: 'h-6 hover:h-8',
    opacity: 'opacity-100 hover:opacity-90',
    visible: true,
  });

  const toggleNotice = () => {
    if (noticeStyleState.visible) {
      hiddenNotice();
    } else {
      showNotice();
    }
  };

  const hiddenNotice = () => {
    noticeStyleState.height = 'h-1 hover:h-4';
    noticeStyleState.opacity = 'opacity-0 hover:opacity-10';
    noticeStyleState.visible = false;
  };

  const showNotice = () => {
    noticeStyleState.height = 'h-6 hover:h-8';
    noticeStyleState.opacity = 'opacity-100 hover:opacity-90';
    noticeStyleState.visible = true;
  };

  return { noticeStyleState, toggleNotice };
};
