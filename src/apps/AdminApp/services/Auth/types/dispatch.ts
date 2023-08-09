// prettier-ignore
export interface Dispatch {
  (service: { code: 'Auth/Bar.count' }       ) : ( payload: Payload<Partial<BarQuery>>) => Promise<R<Selector<Long>>>;
  (service: { code: 'Auth/Bar.create' }      ) : ( payload: Payload<Partial<BarCmd>>)   => Promise<R<CmdR<Long>>>;
  (service: { code: 'Auth/Bar.createSimple' }) : ( payload: Payload<Partial<BarCmd>>)   => Promise<R<CmdR<Long>>>;
  (service: { code: "Auth/Bar.delete" }      ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Bar.deleteHard' }  ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Bar.find' }        ) : ( payload: Payload<Partial<BarQuery>>) => Promise<R<BarEntity>>;
  (service: { code: 'Auth/Bar.restore' }     ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Bar.select' }      ) : ( payload: Payload<Partial<BarQuery>>) => Promise<R<Selector<BarEntity>>>;
  (service: { code: 'Auth/Bar.update' }      ) : ( payload: Payload<Partial<BarCmd>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Bar.updateSimple' }) : ( payload: Payload<Partial<BarCmd>>)   => Promise<R<CmdR<Boolean>>>;

  (service: { code: 'Auth/Foo.count' }       ) : ( payload: Payload<Partial<FooQuery>>) => Promise<R<Selector<Long>>>;
  (service: { code: 'Auth/Foo.create' }      ) : ( payload: Payload<Partial<FooCmd>>)   => Promise<R<CmdR<Long>>>;
  (service: { code: 'Auth/Foo.createSimple' }) : ( payload: Payload<Partial<FooCmd>>)   => Promise<R<CmdR<Long>>>;
  (service: { code: "Auth/Foo.delete" }      ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Foo.deleteHard' }  ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Foo.find' }        ) : ( payload: Payload<Partial<FooQuery>>) => Promise<R<FooEntity>>;
  (service: { code: 'Auth/Foo.restore' }     ) : ( payload: Payload<Partial<Object>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Foo.select' }      ) : ( payload: Payload<Partial<FooQuery>>) => Promise<R<Selector<FooEntity>>>;
  (service: { code: 'Auth/Foo.update' }      ) : ( payload: Payload<Partial<FooCmd>>)   => Promise<R<CmdR<Boolean>>>;
  (service: { code: 'Auth/Foo.updateSimple' }) : ( payload: Payload<Partial<FooCmd>>)   => Promise<R<CmdR<Boolean>>>;
}

type FooCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
  fooManyList: FooManyCmd[];
  fooOne: FooOneCmd;
};

type FooEntity = {
  id: Long;
  remark: string;
  updateVersion: string;
  fooManyList: FooManyCmd[];
  fooOne: FooOneCmd;
};

type FooManyCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type FooManyPo = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type FooOneCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type FooOnePo = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type R<T> = {
  message: string;
  code: string;
  data: T;
};

type CmdR<T> = {
  message: string;
  code: string;
  data: T;
};

type Selector<T> = {
  page: any;
  list: T[];
};

type BarQuery = {
  remark: string;
};

type FooQuery = {
  remark: string;
};

type BarCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
  barManyList: BarManyCmd[];
  barOne: BarOneCmd;
};

type BarEntity = {
  id: Long;
  remark: string;
  updateVersion: string;
  barManyList: BarManyCmd[];
  barOne: BarOneCmd;
};

type BarManyCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type BarManyPo = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type BarOneCmd = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type BarOnePo = {
  id: Long;
  remark: string;
  updateVersion: string;
};

type Long = string | number | null;

type Payload<T> = {
  id: string | number | null;
  idList: string[] | number[] | null;
  body: T | null;
  page: any;
};
