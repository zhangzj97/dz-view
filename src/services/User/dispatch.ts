export interface Dispatch {
  (service: { code: 'User/User.query' }): (payload: Payload<UserDto>) => Promise<R<Coll<UserEntity>>>;
  (service: { code: 'User/User.save' }): (payload: Payload<UserDto>) => Promise<R<Coll<CmdEntity>>>;
  (service: { code: 'User/User.delete' }): (payload: Payload<UserDto>) => Promise<R<Coll<CmdEntity>>>;
}

//

type Long = string | number | null;

type CmdEntity = {
  id: Long;
};

type Coll<T> = {
  list: T[];
  page: any;
};

type Payload<T> = {
  index: any;
  data: T | null;
  list: T[];
};

type R<T> = {
  msg: string;
  code: string;
  data: T;
};

//

type UserEntity = {
  id?: Long;
};

type UserDto = {
  id?: Long;
};
