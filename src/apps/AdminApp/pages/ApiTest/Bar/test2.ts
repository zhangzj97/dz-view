const { dispatch, payload, Service } = useService();

const { Assert, logState, stage } = useTest();

const TestGlobal: any = {};

const find = async () => {
  const id = TestGlobal.data.id;
  const body = {};
  const p = payload(id, body);
  const res = await dispatch(Service.Auth.Bar.find)(p);
  Assert().query('find').log(p, res);

  TestGlobal.data = res.data;

  return res;
};

const findNull = async () => {
  const id = TestGlobal.data.id;
  const body = {};
  const p = payload(id, body);
  const res = await dispatch(Service.Auth.Bar.find)(p);
  Assert().query('find').log(p, res);

  const { data } = res;
  Assert(data).valid('find 无数据').eq(null);
  return res;
};

const select = async () => {
  const idList = [TestGlobal.data.id, 1];
  const body = {};
  const p = payload(idList, body);
  const res = await dispatch(Service.Auth.Bar.select)(p);
  Assert().query('select').log(p, res);

  const { data } = res;
  Assert(data.list.length).valid('select 有数据').neq(0);

  return res;
};

const selectEmpty = async () => {
  const idList = [TestGlobal.data.id, 1];
  const body = {};
  const p = payload(idList, body);
  const res = await dispatch(Service.Auth.Bar.select)(p);
  Assert().query('select').log(p, res);

  const { data } = res;
  Assert(data.list.length).valid('select 无数据').eq(0);

  return res;
};

const 前置 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const res = await dispatch(Service.Auth.Bar.select)(p);
    Assert().query('select').log(p, res);

    const { data } = res;
    Assert(data?.list).valid('data.list 是数组').neq(null);

    if (data?.list.length === 0) {
      Assert(data.list.length).valid('无数据').eq(0);
      return;
    }

    TestGlobal.data = data;
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const res = await dispatch(Service.Auth.Bar.deleteHard)(p);
    Assert().cmd('deleteHard').log(p, res);
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const res = await dispatch(Service.Auth.Bar.select)(p);
    Assert().query('select again').log(p, res);

    const { data } = res;
    Assert(data.list.length).valid('无数据').eq(0);
  }
};

const 后置 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const res = await dispatch(Service.Auth.Bar.select)(p);
    Assert().query('select').log(p, res);

    const { data } = res;
    Assert(data?.list).valid('data.list 是数组').neq(null);

    if (data?.list.length === 0) {
      Assert(data.list.length).valid('select 无数据').eq(0);
      return;
    }

    TestGlobal.data = data;
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const res = await dispatch(Service.Auth.Bar.deleteHard)(p);
    Assert().cmd('deleteHard').log(p, res);
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const res = await dispatch(Service.Auth.Bar.select)(p);
    Assert().query('select again').log(p, res);

    const { data } = res;
    Assert(data.list.length).valid('无数据').eq(0);
  }
};

const 新增 = async () => {
  // createSimple
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const res = await dispatch(Service.Auth.Bar.createSimple)(p);
    Assert().cmd('createSimple').log(p, res);

    const { data } = res;
    Assert(data?.id).valid('CmdR id').neq(null);

    TestGlobal.data = { id: data.id };
  }

  // 验证
  const { data } = await find();
  Assert(data?.remark).valid('entity : remark').eq('test');
};

const 修改_无乐观锁 = async () => {
  await find();

  {
    const id = TestGlobal.data.id;
    const body = { remark: 'test-update' };
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.updateSimple)(p);
    Assert().cmd('updateSimple 未带乐观锁').log(p, res, true);
  }

  // 验证
  const { data } = await find();
  Assert(data?.remark).valid('entity : remark').neq('test-update');
};

const 修改_有乐观锁 = async () => {
  await find();

  {
    const id = TestGlobal.data.id;
    const updateVersion = TestGlobal.data.updateVersion;
    const body = { remark: 'test-update', updateVersion };
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.updateSimple)(p);
    Assert().cmd('updateSimple 带乐观锁').log(p, res);
  }

  // 验证
  const { data } = await find();
  Assert(data?.remark).valid('entity : remark').eq('test-update');
};

const 删除_逻辑删除_直接 = async () => {
  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.deleteSoft)(p);
    Assert().cmd('deleteSoft').log(p, res);
  }

  await findNull();
  await selectEmpty();
};

const 删除_逻辑删除 = async () => {
  await find();
  await select();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.deleteSoft)(p);
    Assert().cmd('deleteSoft').log(p, res);
  }

  await findNull();
  await selectEmpty();
};

const 还原_直接 = async () => {
  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.restore)(p);
    Assert().cmd('restore').log(p, res);
  }

  await find();
  await select();
};

const 还原1 = async () => {
  await findNull();
  await selectEmpty();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.restore)(p);
    Assert().cmd('restore').log(p, res);
  }

  await find();
  await select();
};

const 删除_物理删除 = async () => {
  await find();
  await select();

  {
    const id = TestGlobal.data.id;
    const body = {};
    const p = payload(id, body);
    const res = await dispatch(Service.Auth.Bar.deleteHard)(p);
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
    const res = await dispatch(Service.Auth.Bar.restore)(p);
    Assert().cmd('restore').log(p, res, true);
  }

  await findNull();
  await selectEmpty();
};

export const test = {
  logState,
  code: 'Bar生命周期',
  stageList: [
    stage('前置', 前置),
    stage('新增', 新增),
    stage('修改_无乐观锁', 修改_无乐观锁),
    stage('修改_有乐观锁', 修改_有乐观锁),
    stage('删除_逻辑删除_直接', 删除_逻辑删除_直接),
    stage('删除_逻辑删除', 删除_逻辑删除),
    stage('还原_直接', 还原_直接),
    stage('还原1', 还原1),
    stage('删除_物理删除', 删除_物理删除),
    stage('还原2', 还原2),
    stage('后置', 后置),
  ],
};
