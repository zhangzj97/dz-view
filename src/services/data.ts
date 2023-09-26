export const store = {
  'Dz/Route': await import('./Dz/Route'),
  'Auth/Bar': await import('./Auth/Bar'),
  'Auth/Foo': await import('./Auth/Foo'),
};

export const Service = {
  ...(await import('./Dz/service')).Service,
  ...(await import('./Auth/service')).Service,
};

export type Dispatch = import('./Dz/dispatch').Dispatch & import('./Auth/dispatch').Dispatch;
