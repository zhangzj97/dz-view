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

const 新增_非幂等 = async () => {
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

const 修改_默认需要乐观锁_但无_失败 = async () => {
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

const 修改_默认需要乐观锁_且有_幂等 = async () => {
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

const 逻辑删除_幂等 = async () => {
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

const 还原_逻辑删除_幂等 = async () => {
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

const 删除_物理删除_非幂等 = async () => {
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

/**
 * @depre
 */
const 还原_物理删除后_失败 = async () => {
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
  code: 'Bar 基础指令幂等',
  stageList: [
    stage('新增_非幂等', 新增_非幂等),
    stage('修改_默认需要乐观锁_但无_失败', 修改_默认需要乐观锁_但无_失败),
    stage('修改_默认需要乐观锁_且有_幂等', 修改_默认需要乐观锁_且有_幂等),
    stage('逻辑删除_幂等', 逻辑删除_幂等),
    stage('还原_逻辑删除后_幂等', 还原_逻辑删除_幂等),
    stage('删除_物理删除_非幂等', 删除_物理删除_非幂等),
    stage('还原_物理删除后_失败', 还原_物理删除后_失败),
  ],
};
