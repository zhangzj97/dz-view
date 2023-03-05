export default [
  {
    id: '100',
    code: 'Three',
    type: 'node',
    name: '',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '0',
    path: '100',
  },
  {
    id: '101',
    code: 'Demo/User',
    type: 'route',
    name: '用户',
    scope: 'Three',
    component: 'Demo/User',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/User/:id',
    target: '_self',
    url: '',
    showMenu: false,
    tagFixed: false,
    parentId: '100',
    path: '100|101',
  },
  {
    id: '102',
    code: 'PAGEHOME',
    type: 'route',
    name: '首页',
    scope: 'Three',
    component: 'Home/Dashboard',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/HOME',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: true,
    parentId: '100',
    path: '100|102',
  },
  {
    id: '200',
    code: 'Demo',
    type: 'node',
    name: '示例',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '100',
    path: '100|200',
  },
  {
    id: '201',
    code: 'Demo/Button',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Button',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/DemoButton',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|201',
  },
  {
    id: '202',
    code: 'Demo/Alert',
    type: 'route',
    name: '警告',
    scope: 'Three',
    component: 'Demo/Alert',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/DemoAlert',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|202',
  },
  {
    id: '203',
    code: 'Demo/Table',
    type: 'route',
    name: 'Table',
    scope: 'Three',
    component: 'Demo/Table',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/Table',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|203',
  },
  {
    id: '204',
    code: 'Demo/Modal',
    type: 'route',
    name: 'Modal',
    scope: 'Three',
    component: 'Demo/Modal',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/Modal',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|204',
  },
  {
    id: '205',
    code: 'Demo/Form',
    type: 'route',
    name: 'Form',
    scope: 'Three',
    component: 'Demo/Form',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/Form',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|205',
  },
  {
    id: '206',
    code: 'Demo/TabTable',
    type: 'route',
    name: 'TabTable',
    scope: 'Three',
    component: 'Demo/TabTable',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/TabTable',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|206',
  },
  {
    id: '207',
    code: 'Demo/Popover',
    type: 'route',
    name: 'Popover',
    scope: 'Three',
    component: 'Demo/Popover',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/Popover',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '200',
    path: '100|200|207',
  },
  {
    id: '300',
    code: 'Demo2',
    type: 'route',
    name: '示例2',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '100',
    path: '100|300',
  },
  {
    id: '301',
    code: 'Demo/Button02',
    type: 'route',
    name: '按钮2',
    scope: 'Three',
    component: 'Demo/Button02',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/DemoButton02',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '300',
    path: '100|300|301',
  },
  {
    id: '302',
    code: 'Demo/Alert02',
    type: 'route',
    name: '警告2',
    scope: 'Three',
    component: 'Demo/Alert02',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/DemoAlert02',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '300',
    path: '100|300|302',
  },
  {
    id: '303',
    code: 'baidu',
    type: 'link',
    name: '百度',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: 'www.baidu.com',
    showMenu: true,
    tagFixed: false,
    parentId: '300',
    path: '100|300|303',
  },
  {
    id: '400',
    code: 'Route',
    type: 'node',
    name: '特殊路由',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '100',
    path: '100|400',
  },
  {
    id: '401',
    code: 'Demo/Fixed',
    type: 'route',
    name: '固定',
    scope: 'Three',
    component: 'Demo/Fixed',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Demo/Fixed',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: true,
    parentId: '400',
    path: '100|400|401',
  },
  {
    id: '10100',
    code: 'uThree',
    type: 'node',
    name: '',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '0',
    path: '10100',
  },
  {
    id: '10101',
    code: 'uDemo/User',
    type: 'route',
    name: '用户',
    scope: 'Three',
    component: 'Demo/User',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/u/User/:id',
    target: '_self',
    url: '',
    showMenu: false,
    tagFixed: false,
    parentId: '10100',
    path: '10100|10101',
  },
  {
    id: '10200',
    code: 'uDemo',
    type: 'node',
    name: '示例',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10100',
    path: '10100|10200',
  },
  {
    id: '10201',
    code: 'uDemo/Button',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Button',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/u/DemoButton',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10200',
    path: '10100|10200|10201',
  },
  {
    id: '10202',
    code: 'uDemo/Alert',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Alert',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/DemoAlert',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10200',
    path: '10100|10200|10202',
  },
  {
    id: '10300',
    code: 'uDemo2',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10100',
    path: '10100|10300',
  },
  {
    id: '10301',
    code: 'uDemo/Button02',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Button02',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/u/DemoButton02',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10300',
    path: '10100|10300|10301',
  },
  {
    id: '10302',
    code: 'uDemo/Alert02',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Alert02',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/u/DemoAlert02',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10300',
    path: '10100|10300|10302',
  },
  {
    id: '10303',
    code: 'ubaidu',
    type: 'link',
    name: '按钮',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: 'www.baidu.com',
    showMenu: true,
    tagFixed: false,
    parentId: '10300',
    path: '10100|10300|10303',
  },
  {
    id: '10400',
    code: 'uRoute',
    type: 'node',
    name: '按钮',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '10100',
    path: '10100|10400',
  },
  {
    id: '10401',
    code: 'uDemo/Fixed',
    type: 'route',
    name: '按钮',
    scope: 'Three',
    component: 'Demo/Fixed',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/u/Demo/Fixed',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: true,
    parentId: '10400',
    path: '10100|10400|10401',
  },
  {
    id: '500',
    code: 'Auth',
    type: 'node',
    name: 'AuthService',
    scope: 'Three',
    component: '',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '100',
    path: '100|500',
  },
  {
    id: '501',
    code: 'Auth/AcGroup',
    type: 'route',
    name: 'Auth/AcGroup',
    scope: 'Three',
    component: 'Auth/AcGroup',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcGroup',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|501',
  },
  {
    id: '502',
    code: 'Auth/AcGroupRole',
    type: 'route',
    name: 'Auth/AcGroupRole',
    scope: 'Three',
    component: 'Auth/AcGroupRole',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcGroupRole',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|502',
  },
  {
    id: '503',
    code: 'Auth/AcRole',
    type: 'route',
    name: 'Auth/AcRole',
    scope: 'Three',
    component: 'Auth/AcRole',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcRole',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|503',
  },
  {
    id: '504',
    code: 'Auth/AcUser',
    type: 'route',
    name: 'Auth/AcUser',
    scope: 'Three',
    component: 'Auth/AcUser',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUser',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|504',
  },
  {
    id: '505',
    code: 'Auth/AcUserGroup',
    type: 'route',
    name: 'Auth/AcUserGroup',
    scope: 'Three',
    component: 'Auth/AcUserGroup',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserGroup',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|505',
  },
  {
    id: '506',
    code: 'Auth/AcUserLoginLog',
    type: 'route',
    name: 'Auth/AcUserLoginLog',
    scope: 'Three',
    component: 'Auth/AcUserLoginLog',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserLoginLog',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|506',
  },
  {
    id: '507',
    code: 'Auth/AcUserLoginWay',
    type: 'route',
    name: 'Auth/AcUserLoginWay',
    scope: 'Three',
    component: 'Auth/AcUserLoginWay',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserLoginWay',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|507',
  },
  {
    id: '508',
    code: 'Auth/AcUserProfile',
    type: 'route',
    name: 'Auth/AcUserProfile',
    scope: 'Three',
    component: 'Auth/AcUserProfile',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserProfile',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|508',
  },
  {
    id: '509',
    code: 'Auth/AcUserRole',
    type: 'route',
    name: 'Auth/AcUserRole',
    scope: 'Three',
    component: 'Auth/AcUserRole',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserRole',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|509',
  },
  {
    id: '510',
    code: 'Auth/AcUserUpdateLog',
    type: 'route',
    name: 'Auth/AcUserUpdateLog',
    scope: 'Three',
    component: 'Auth/AcUserUpdateLog',
    icon: 'ic:twotone-yard',
    redirect: '',
    route: '/Auth/AcUserUpdateLog',
    target: '_self',
    url: '',
    showMenu: true,
    tagFixed: false,
    parentId: '500',
    path: '100|500|510',
  },
];
