import { Service } from '@/config/service';
import { Control } from '@/config/control';

export const useBind = () => {
  const store = reactive({
    value: {},
    state: {},
    el: {},
  });

  const bind = (code: string, state: any = null) => {
    if (state) {
      if (!store.state[code]) {
        store.state[code] = state;
        store.value[code] = null;
      }

      return {
        code,
        state: store.state[code],
        value: store.value[code],
        ref: el => (store.el[code] = el),
        'onUpdate:value': (code: string, value: any) => setValue(code, value),
        'onUpdate:state': (code: string, state: any) => setState(code, state),
      };
    }

    if (store.el[code]) {
      return store.el[code];
    }
  };

  const setValue = (code, value) => {
    store.value[code] = value;
  };

  const setState = (code, state) => {
    console.log(code, state);
    Object.entries(state).forEach(([k, v]) => {
      if (v != null) {
        store.state[code][k] = v;
      }
    });
  };

  return {
    bind,

    Service,
    Control,
  };
};
