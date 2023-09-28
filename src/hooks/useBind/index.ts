import { Service } from '@/config/service';
import { Control } from '@/config/control';

export const useBind = () => {
  const store = reactive({
    value: {},
    payload: {},
    el: {},
  });

  const bind = (code: string, payload: any = null) => {
    if (payload) {
      if (!store.payload[code]) {
        store.payload[code] = payload;
        store.value[code] = null;
      }

      return {
        code,
        value: store.value[code],
        payload: store.payload[code],
        ref: el => (store.el[code] = el),
        'onUpdate:value': (code: string, value: any) => setValue(code, value),
        'onUpdate:payload': (code: string, payload: any) => setPayload(code, payload),
      };
    }

    if (store.el[code]) {
      return store.el[code];
    }
  };

  const setValue = (code, value) => {
    store.value[code] = value;
  };

  const setPayload = (code, payload) => {
    if (payload === null) {
      store.payload[code] = {};
      return;
    }
    Object.entries(payload).forEach(([k, v]) => {
      if (v != null) {
        store.payload[code][k] = v;
      }
    });
  };

  return {
    bind,

    Service,
    Control,
  };
};
