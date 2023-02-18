export const useTheme = ({ config, themePart }) => {
  const SourceThemeMap = JSON.parse(localStorage.getItem('SourceThemeMap') || '');

  const { SourceThemeCurrentCode } = config;

  const toThemeOption = ({ themeCode }) => {
    return SourceThemeMap[themeCode].content[themePart];
  };

  const themeOption = toThemeOption({ themeCode: SourceThemeCurrentCode });

  return {
    themeOption,
  };
};
