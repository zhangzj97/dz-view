enum AuthService {
  Bar_Create = 'Demo.Bar/create',
}

const { dispatch } = useService();

const { Assert, AssertGroup, logState } = useTest();

const 新增1 = () => {
  AssertGroup('新增1');
  const request = {};

  const id = '12';

  setTimeout(() => {
    Assert(id).msg('希望等于id').eq('112').r();
  }, 3000);
  Assert(id).msg('希望等于12').eq('12').r();
  Assert(id).eq('12').r();
  Assert(id).eq('12').r();
};

const 新增2 = async log => {
  AssertGroup('新增2');
  const request = {};
  const id = 1;

  Assert(id).eq('12').r();
};

export const test = {
  code: '测试一号',
  logState,
  stage: [
    { code: '新增1', test: 新增1 },
    { code: '新增2', test: 新增2 },
  ],
};
