export const store = {
  'Dz/Route': (await import('./Dz/Route')).useStore,
  'Auth/Bar': (await import('./Auth/Bar')).useStore,
  'Auth/Foo': (await import('./Auth/Foo')).useStore,
};

export const Service = {
  ...(await import('./Dz/service')).Service,
  ...(await import('./Auth/service')).Service,
};

export type Dispatch = import('./Dz/dispatch').Dispatch & import('./Auth/dispatch').Dispatch;
