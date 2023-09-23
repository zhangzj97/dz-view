const { dispatch, payload, Service } = useService();

const { Assert, logState, stage } = useTest();

const ServiceMain = Service.Auth.Bar;
const ServiceCode = 'Auth.Bar';

const TestGlobal: any = {};

const find = async () => {
  const id = TestGlobal.data.id;
  const body = {};
  const p = payload(id, body);
  const res = await dispatch(ServiceMain.find)(p);
  Assert().query('find').log(p, res);

  TestGlobal.data = res.data;

  return res;
};

const findNull = async () => {
  const id = TestGlobal.data.id;
  const body = {};
  const p = payload(id, body);
  const res = await dispatch(ServiceMain.find)(p);
  Assert().query('find').log(p, res);

  const { data } = res;
  Assert(data).valid('find 无数据').eq(null);
  return res;
};

const select = async () => {
  const idList = [TestGlobal.data.id, 1];
  const body = {};
  const p = payload(idList, body);
  const res = await dispatch(ServiceMain.select)(p);
  Assert().query('select').log(p, res);

  const { data } = res;
  Assert(data.list.length).valid('select 有数据').neq(0);

  return res;
};

const selectEmpty = async () => {
  const idList = [TestGlobal.data.id, 1];
  const body = {};
  const p = payload(idList, body);
  const res = await dispatch(ServiceMain.select)(p);
  Assert().query('select').log(p, res);

  const { data } = res;
  Assert(data.list.length).valid('select 无数据').eq(0);

  return res;
};

const 新增 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarOne_null = async () => {
  {
    const body = { remark: 'test', barOne: null };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarOne_空 = async () => {
  {
    const body = { remark: 'test', barOne: {} };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarOne_常 = async () => {
  {
    const body = { remark: 'test', barOne: { remark: 'one' } };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_null = async () => {
  {
    const body = { remark: 'test', barManyList: null };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_0 = async () => {
  {
    const body = { remark: 'test', barManyList: [] };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_空 = async () => {
  {
    const body = { remark: 'test', barManyList: [{}] };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_空空 = async () => {
  {
    const body = { remark: 'test', barManyList: [{}, {}] };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_常 = async () => {
  {
    const body = { remark: 'test', barManyList: [{ remark: 'many' }] };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 新增_BarMany_常空 = async () => {
  {
    const body = { remark: 'test', barManyList: [{ remark: 'many' }, {}] };
    const p = payload(null, body);
    const res = await dispatch(ServiceMain.create)(p);
    Assert().cmd('create').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('create: id').neq(null);

    TestGlobal.data = { id: data?.id };
  }

  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test');
};

const 修改_无乐观锁 = async () => {
  await find();

  {
    const id = TestGlobal.data.id;
    const body = { remark: 'test-update' };
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.update)(p);
    Assert().cmd('update 未带乐观锁').log(p, res, true);
  }

  // 验证
  const { data } = await find();
  Assert(data?.remark).valid('find: remark').neq('test-update');
};

const 修改_有乐观锁 = async () => {
  await find();

  {
    const id = TestGlobal.data.id;
    const updateVersion = TestGlobal.data.updateVersion;
    const body = { remark: 'test-update', updateVersion };
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.update)(p);
    Assert().cmd('update 带乐观锁').log(p, res);
  }

  // 验证
  const { data } = await find();
  Assert(data?.remark).valid('find: remark').eq('test-update');
};

const 删除_soft = async () => {
  await find();
  await select();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.deleteSoft)(p);
    Assert().cmd('deleteSoft').log(p, res);
  }

  await findNull();
  await selectEmpty();
};

const 还原1 = async () => {
  await findNull();
  await selectEmpty();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.restore)(p);
    Assert().cmd('restore').log(p, res);
  }

  await find();
  await select();
};

const 删除_hard = async () => {
  await find();
  await select();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.deleteHard)(p);
    Assert().cmd('deleteHard').log(p, res);
  }

  await findNull();
  await selectEmpty();
};

const 还原2 = async () => {
  await findNull();
  await selectEmpty();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(ServiceMain.restore)(p);
    Assert().cmd('restore').log(p, res, true);
  }

  await findNull();
  await selectEmpty();
};

export const test = {
  logState,
  code: ServiceCode,
  stageList: [
    stage('新增', 新增),

    stage('新增_BarOne_null', 新增_BarOne_null),
    stage('新增_BarOne_空', 新增_BarOne_空),
    stage('新增_BarOne_常', 新增_BarOne_常),

    stage('新增_BarMany_null', 新增_BarMany_null),
    stage('新增_BarMany_0', 新增_BarMany_0),
    stage('新增_BarMany_空', 新增_BarMany_空),
    stage('新增_BarMany_空空', 新增_BarMany_空空),
    stage('新增_BarMany_常', 新增_BarMany_常),
    stage('新增_BarMany_常空', 新增_BarMany_常空),

    stage('修改_无乐观锁', 修改_无乐观锁),
    stage('修改_有乐观锁', 修改_有乐观锁),
    stage('删除_soft', 删除_soft),
    stage('还原1', 还原1),
    stage('删除_hard', 删除_hard),
    stage('还原2', 还原2),
  ],
};
