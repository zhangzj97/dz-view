const ViewName = 'ThemeApp';
const HomePageName = 'Main';
const i18nSeparator = '.';
const logoTitle = 'Acro Admin';

const DzAlertOption = {
  themeOption: {
    primary: '@ThemeApp/Green',
    danger: '@ThemeApp/Red',
    info: '@ThemeApp/Blue',
    warn: '@ThemeApp/Yellow',
    default: '@ThemeApp/Gray',
  },

  iconOption: {
    primary: 'ic:round-check-circle-outline',
    danger: 'ic:outline-dangerous',
    info: 'ic:outline-info',
    warn: 'ic:round-error-outline',
    default: '',
  },
};

const DzButtonOption = {
  themeOption: {
    primary: '@ThemeApp/Green',
    danger: '@ThemeApp/Red',
    info: '@ThemeApp/Blue',
    warn: '@ThemeApp/Yellow',
    default: '@ThemeApp/Gray',
  },

  iconOption: {
    primary: 'ic:round-check-circle-outline',
    danger: 'ic:outline-dangerous',
    info: 'ic:outline-info',
    warn: 'ic:round-error-outline',
    default: '',
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
