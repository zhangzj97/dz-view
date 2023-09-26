const AdminAppPageTest = ['ApiTest/Bar', 'ApiTest/Foo'].map((item, index) => ({
  id: `AdminAppPageTest${index}`,
  parentId: 'AdminAppPageTest',
  avatar: 'el:address-book',
  title: `${item}`,

  appName: 'AdminApp',

  code: `AdminApp.${item}`,
  path: `/${item}`,
  component: `/AdminApp/pages/${item}`,
}));

const AdminAppPageDemoCard = [
  'PageDemo/Card01',
  'PageDemo/Card02',
  'PageDemo/Card03',
  'PageDemo/Card04',
  'PageDemo/Card05',
  'PageDemo/Card06',
  'PageDemo/Card07',
  'PageDemo/Card08',
  'PageDemo/Card09',
  'PageDemo/Card10',
].map((item, index) => ({
  id: `AdminAppPageDemoCard${index}`,
  parentId: 'AdminAppPageDemoCard',
  avatar: 'el:address-book',
  title: `${item}`,

  appName: 'AdminApp',

  code: `AdminApp.${item}`,
  path: `/${item}`,
  component: `/AdminApp/pages/${item}`,
}));

const AdminAppPageDemoForm = [
  'PageDemo/Form01',
  'PageDemo/Form02',
  'PageDemo/Form03',
  'PageDemo/Form04',
  'PageDemo/Form05',
  'PageDemo/Form06',
  'PageDemo/Form07',
  'PageDemo/Form08',
  'PageDemo/Form09',
  'PageDemo/Form10',
].map((item, index) => ({
  id: `AdminAppPageDemoForm${index}`,
  parentId: 'AdminAppPageDemoForm',
  avatar: 'el:address-book',
  title: `${item}`,

  appName: 'AdminApp',

  code: `AdminApp.${item}`,
  path: `/${item}`,
  component: `/AdminApp/pages/${item}`,
}));

export const menuList = [
  {
    id: 'AdminAppPageTest',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 'Api',
    path: '',
  },
  {
    id: 'AdminAppPageDemoCard',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 'Card',
    path: '',
  },

  {
    id: 'AdminAppPageDemoForm',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 'Form',
    path: '',
  },

  ...AdminAppPageTest,
  ...AdminAppPageDemoForm,
  ...AdminAppPageDemoCard,

  {
    id: '2221',
    parentId: '222',
    avatar: 'el:address-book',
    title: 't2-2-2-1 Demo/T2',

    appName: 'AdminApp',

    code: 'AdminApp.Demo/T2',
    path: '/Demo/T2',
    component: '/AdminApp/pages/Demo/T2',
  },

  ///
  {
    id: '1',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 't1',
    path: '',
  },
  {
    id: '2',
    parentId: '0',
    type: 'node',
    avatar: 'el:adjust-alt',
    title: 't2',
    path: '',
  },
  {
    id: '21',
    parentId: '2',
    type: 'node',
    avatar: 'el:address-book',
    title: 't2-1',
    path: '',
  },
  {
    id: '22',
    parentId: '2',
    avatar: 'el:address-book',
    title: 't2-2',
    path: '',
  },
  {
    id: '221',
    parentId: '22',
    avatar: 'el:address-book',
    title: '221 Demo/T1 Fixed',

    appName: 'AdminApp',

    code: 'AdminApp.Demo/T1',
    path: '/Demo/T1',
    component: '/AdminApp/pages/Demo/T1',

    fixedTag: true,
  },
  {
    id: '222',
    parentId: '22',
    avatar: 'el:address-book',
    title: 't2-2-2',
  },
  {
    id: '2221',
    parentId: '222',
    avatar: 'el:address-book',
    title: 't2-2-2-1 Demo/T2',

    appName: 'AdminApp',

    code: 'AdminApp.Demo/T2',
    path: '/Demo/T2',
    component: '/AdminApp/pages/Demo/T2',
  },
  {
    id: '3',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 't3',
    path: '',
  },
  {
    id: '4',
    parentId: '0',
    avatar: 'el:adjust-alt',
    title: 't4',
    path: '',
  },
  {
    id: '41',
    parentId: '4',
    avatar: 'el:address-book',
    title: 't4-1',

    appName: 'AdminApp',

    code: 'AdminApp/Demo02/T1',
    path: '/Demo02/T1',
    component: '/AdminApp/pages/Demo02/T1',
  },
  {
    id: '42',
    parentId: '4',
    avatar: 'el:address-book',
    title: 't4-2',

    appName: 'AdminApp',

    code: 'AdminApp.Demo02/T2',
    path: '/Demo02/T2',
    component: '/AdminApp/pages/Demo02/T2',
  },
  // Test Route
  {
    id: '52',
    parentId: '0',
    avatar: 'el:address-book',
    title: 'User系统',
    appName: 'AdminApp',
    code: 'AdminApp.Demo02/T2',
    path: '/Demo02/T2',
    component: '/AdminApp/pages/Demo02/T2',
  },
  {
    id: '521',
    parentId: '52',
    avatar: 'el:address-book',
    title: 'User/User',
    appName: 'AdminApp',
    code: 'AdminApp.User/User',
    path: '/User/User',
    component: '/AdminApp/pages/User/User',
  },
];
