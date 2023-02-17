export const useTheme = ({ props, config, themePart }) => {
  const SourceThemeMap = JSON.parse(localStorage.getItem('SourceThemeMap') || '');
  const configThemeOption = config?.[themePart].themeOption;

  let themeScope = configThemeOption.default;
  if (props.primary) {
    themeScope = configThemeOption.primary;
  } else if (props.info) {
    themeScope = configThemeOption.info;
  } else if (props.danger) {
    themeScope = configThemeOption.danger;
  } else if (props.warn) {
    themeScope = configThemeOption.warn;
  } else if (props.theme) {
    themeScope = props.theme;
  } else if (!props.theme) {
    themeScope = configThemeOption.default;
  }

  const toThemeOption = ({ themeScope }) => {
    return SourceThemeMap[themeScope].content[themePart];
  };

  const themeOption = toThemeOption({ themeScope });

  // Todo
  const toIcon = () => {
    const configIconOption = config?.[themePart].iconOption;
    let icon = configIconOption.default;
    if (props.primary) {
      icon = configIconOption.primary;
    } else if (props.info) {
      icon = configIconOption.info;
    } else if (props.danger) {
      icon = configIconOption.danger;
    } else if (props.warn) {
      icon = configIconOption.warn;
    } else if (props.icon) {
      icon = props.icon;
    } else if (!props.theme) {
      icon = configIconOption.default;
    }

    return { icon };
  };
  // Todo
  const { icon } = toIcon();

  return {
    themeOption,

    icon,
  };
};
