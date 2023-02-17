import SourceTheme from '@/themes';

export const useTheme = () => {
  const SourceThemeList = Object.values(SourceTheme).reduce((previousValue: any[], currentValue: any) => {
    previousValue.push(...Object.values(currentValue));
    return previousValue;
  }, []);

  const SourceThemeMap = Object.values(SourceTheme).reduce((previousValue: any, currentValue: any) => {
    return { ...previousValue, ...currentValue };
  }, {});

  // Todo : 存到存到 vuex 中
  localStorage.setItem('SourceThemeMap', JSON.stringify(SourceThemeMap));

  return {
    SourceTheme,
    SourceThemeList,
    SourceThemeMap,
  };
};

export const useThemeTool = ({ props, config, themePart }) => {
  // Todo : 从 vuex 中获取
  const SourceThemeMap = JSON.parse(localStorage.getItem('SourceThemeMap') || '');

  const configThemeOption = config?.[themePart].themeOption;

  const toThemeOption = () => {
    if (props.primary) {
      return SourceThemeMap[configThemeOption.primary];
    } else if (props.danger) {
      return SourceThemeMap[configThemeOption.danger];
    } else if (props.theme) {
      return SourceThemeMap[props.theme];
    } else if (!props.theme) {
      return SourceThemeMap[configThemeOption.default];
    }
  };

  const themeOption = toThemeOption();

  return {
    SourceTheme,

    themeOption,
  };
};
