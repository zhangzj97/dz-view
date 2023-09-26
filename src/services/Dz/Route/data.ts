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

const avatar = 'el:address-book';

export const menuList = [
  // Tree Test
  { id: 't-100', title: 't-100', type: 'route', path: '/Tree/Tree100', avatar, parentId: '0' },
  { id: 't-200', title: 't-200', type: 'node', path: '/Tree/Tree200', avatar, parentId: '0' },
  { id: 't-210', title: 't-210', type: 'route', path: '/Tree/Tree210', avatar, parentId: 't-200' },
  { id: 't-220', title: 't-220', type: 'route', path: '/Tree/Tree220', avatar, parentId: 't-200' },
  { id: 't-300', title: 't-300', type: 'node', path: '/Tree/Tree300', avatar, parentId: '0' },
  { id: 't-310', title: 't-310', type: 'node', path: '/Tree/Tree310', avatar, parentId: 't-300' },
  { id: 't-320', title: 't-320', type: 'node', path: '/Tree/Tree320', avatar, parentId: 't-300' },
  { id: 't-311', title: 't-311', type: 'route', path: '/Tree/Tree311', avatar, parentId: 't-310' },
  { id: 't-312', title: 't-312', type: 'route', path: '/Tree/Tree312', avatar, parentId: 't-310' },
  { id: 't-321', title: 't-321', type: 'route', path: '/Tree/Tree321', avatar, parentId: 't-320' },
  { id: 't-322', title: 't-322', type: 'route', path: '/Tree/Tree322', avatar, parentId: 't-320', fixedTag: true },

  // TEst
  { id: 'test-btn', title: 'btn', type: 'route', path: '/Test/Btn', avatar, parentId: '0', fixedTag: true },
  { id: 'test-popup', title: 'popup', type: 'route', path: '/Test/Popup', avatar, parentId: '0', fixedTag: true },
];
