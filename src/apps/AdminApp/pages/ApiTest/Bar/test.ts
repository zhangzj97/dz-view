const { dispatch, payload, Service } = useService();

const { Assert, logState, stage } = useTest();

const TestGlobal: any = {};

/**
 *
 * 1. 查出所有测试数据
 * 2. 删除这些数据
 * 3. 再次查询看看
 */
const 前置 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]查询所有测试数据').log(p, { data });

    TestGlobal.data = data;
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.deleteHard)(p);
    Assert().msg('[接口]删除这些数据').log(p, { data });
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看').log(p, { data });
    Assert(data.list.length).msg('无测试数据').eq(0);
  }
};

const 后置 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('查询所有测试数据').log(p, { data });

    TestGlobal.data = data;
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.deleteHard)(p);
    Assert().msg('[接口]删除这些数据').log(p, { data });
  }

  {
    const idList = TestGlobal.data.list.map(i => i.id);
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看').log(p, { data });
    Assert(data.list.length).msg('无测试数据').eq(0);
  }
};

const 新增 = async () => {
  {
    const body = { remark: 'test' };
    const p = payload(null, body);
    const { data } = await dispatch(Service.Auth.Bar.create)(p);
    Assert().msg('查询所有测试数据').log(p, { data: data });
    Assert(data.data).msg('新增返回 id').neq(null);

    TestGlobal.id = data.data;
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert().msg('通过 id 查询数据').log(p);
    Assert(data.id).msg('查到数据 id').eq(id);
    Assert(data.remark).msg('查到数据 remark').eq('test');
  }
};

const 修改_无乐观锁 = async () => {
  {
    const id = TestGlobal.id;
    const body = { remark: 'test-update' };
    const p = payload(id, body);
    const { data, code } = await dispatch(Service.Auth.Bar.update)(p);
    Assert().msg('修改数据 未带乐观锁').log(p, { data, code });
    Assert(code).msg('结果应该失败').neq('0');
  }
};

const 修改_有乐观锁 = async () => {
  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert(null).msg('查找数据').log(p, { data });
    Assert(data.id).msg('查到数据 id').eq(id);
    Assert(data.remark).msg('查到数据 remark').eq('test');

    TestGlobal.data = data;
  }

  {
    const id = TestGlobal.id;
    const updateVersion = TestGlobal.data.updateVersion;
    const body = { remark: 'test-update', updateVersion };
    const p = payload(id, body);
    const { data, code } = await dispatch(Service.Auth.Bar.update)(p);
    Assert(null).msg('修改数据 带乐观锁').log(p, { data });
    Assert(code).msg('结果应该成功').eq('0');
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert(null).msg('再次通过 id 查询数据').log(p, { data });
    Assert(data.id).msg('查到数据 id').eq(id);
    Assert(data.remark).msg('查到数据 remark').eq('test-update');
  }
};

const 删除_逻辑删除 = async () => {
  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.delete)(p);
    Assert().msg('删除数据 逻辑删除').log(p, { data });
  }

  {
    const idList = [TestGlobal.id];
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看 分页数据').log(p, { data });
    Assert(data.list.length).msg('无测试数据').eq(0);
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert().msg('[接口]再次查询看看 单查数据').log(p, { data });
    Assert(data.id).msg('查询到数据').eq(id);
  }
};

const 还原1 = async () => {
  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.restore)(p);
    Assert().msg('还原数据 ').log(p, { data });
  }

  {
    const idList = [TestGlobal.id];
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看 分页数据').log(p, { data });
    Assert(data.list.length).msg('存在测试数据').eq(1);
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert().msg('[接口]再次查询看看 单查数据').log(p, { data });
    Assert(data.id).msg('查询到数据').eq(id);
  }
};

const 删除_物理删除 = async () => {
  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.delete)(p);
    Assert().msg('删除数据 逻辑删除').log(p, { data });
  }

  {
    const idList = [TestGlobal.id];
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看 分页数据').log(p, { data });
    Assert(data.list.length).msg('无测试数据').eq(0);
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert().msg('[接口]再次查询看看 单查数据').log(p, { data });
    Assert(data?.id).msg('无测试数据').neq(id);
  }
};

const 还原2 = async () => {
  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.deleteHard)(p);
    Assert().msg('还原数据 ').log(p, { data });
  }

  {
    const idList = [TestGlobal.id];
    const body = {};
    const p = payload(idList, body);
    const { data } = await dispatch(Service.Auth.Bar.select)(p);
    Assert().msg('[接口]再次查询看看 分页数据').log(p, { data });
    Assert(data.list.length).msg('无测试数据').eq(0);
  }

  {
    const id = TestGlobal.id;
    const body = {};
    const p = payload(id, body);
    const { data } = await dispatch(Service.Auth.Bar.find)(p);
    Assert().msg('[接口]再次查询看看 单查数据').log(p, { data });
    Assert(data?.id).msg('无测试数据').neq(id);
  }
};

export const test = {
  logState,
  code: 'Bar生命周期',
  stageList: [
    stage('前置', 前置),
    stage('新增', 新增),
    stage('修改_无乐观锁', 修改_无乐观锁),
    stage('修改_有乐观锁', 修改_有乐观锁),
    stage('删除_逻辑删除', 删除_逻辑删除),
    stage('还原1', 还原1),
    stage('删除_物理删除', 删除_物理删除),
    stage('还原2', 还原2),
    stage('后置', 后置),
  ],
};
