export const useControlService = ({ props, emits }) => {
  const serviceStore = reactive<any>({
    service: props.service?.code,
    list: [],
    map: {},
    version: {
      value: Date.now(),
    },
  });

  const getService = () => serviceStore;

  const setServiceData = (list: any[]) => {
    if (!Array.isArray(list)) return;
    serviceStore.list = list;
    serviceStore.map = {};
    list.forEach(item => (serviceStore.map[item.id] = item));
    serviceStore.version.value = Date.now();
  };

  const handleService = {
    set: (value: unknown[]) => {
      if (!Array.isArray(value)) return;
      serviceStore.list = value;
      serviceStore.map = {};
      serviceStore.list.forEach(item => (serviceStore.map[item.id] = item));
      serviceStore.version.value = Date.now();
    },
  };

  return {
    getService: getService,

    service: serviceStore,

    handleService,

    setServiceData,
  };
};
