const ViewName = 'Four';
const HomePageName = 'Main';
const i18nSeparator = '.';
const logoTitle = 'Acro Admin';

const DzAlertOption = {
  themeOption: {
    primary: '@ThemeApp/Green',
    danger: '@ThemeApp/Red',
    default: '@ThemeApp/Gray',
  },
};

const DzButtonOption = {
  themeOption: {
    primary: '@ThemeApp/Green',
    danger: '@ThemeApp/Red',
    default: '@ThemeApp/Gray',
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

  RootRouteOption,

  // 组件配置
  DzAlertOption,
  DzButtonOption,
};
