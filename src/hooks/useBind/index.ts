export const useBind = () => {
  const store = reactive({
    state: {},
    value: {},
    el: {},
  });

  const bind = (bindId: string, isBindEl: boolean = false) => {
    if (isBindEl) {
      if (!store.state[bindId]) {
        store.state[bindId] = {};
      }

      return {
        bindId: bindId,
        state: store.state[bindId],
        ref: el => (store.el[bindId] = el),
        'onUpdate:value': (bindId: string, value: any) => setValue(bindId, value),
        'onUpdate:state': (bindId: string, state: any) => setState(bindId, state),
      };
    }

    if (store.el[bindId]) {
      return store.el[bindId];
    }
  };

  const setValue = (bindId, value) => {
    store.value[bindId] = value;
  };

  const setState = (bindId, state) => {
    Object.entries(state).forEach(([k, v]) => {
      if (v != null) {
        store.state[bindId][k] = v;
      }
    });
  };

  return {
    bind,
  };
};
