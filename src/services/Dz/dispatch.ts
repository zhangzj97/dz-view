export interface Dispatch {
  (service: { code: 'Dz/Route.AddRouteTag' }): (payload: any) => Promise<R<any>>;
  (service: { code: 'Dz/Route.RemoveRouteTag' }): (payload: any) => Promise<R<any>>;
  (service: { code: 'Dz/Route.RefreshMenu' }): (payload: any) => Promise<R<any>>;
}

type R<T> = {
  msg: string;
  code: string;
  data: T;
};
