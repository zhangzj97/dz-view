const ViewName = 'Three';
const HomePageName = 'Main';
const i18nSeparator = '.';
const logoTitle = 'Acro Admin';

const DzAlertOption = {
  themeOption: {
    primary: 'green',
    default: 'gray',
  },
};

const DzButtonOption = {
  themeOption: {
    primary: 'blue',
    default: 'gray',
  },
};

const RootRouteOption = {
  id: 'ROOT',
  code: 'ROOT',
};

export const config = {
  // 当前业务配置
  ViewName,
  HomePageName,
  i18nSeparator,
  logoTitle,

  // 路径
  RootRouteOption,

  // 组件配置
  DzAlertOption,
  DzButtonOption,
};
