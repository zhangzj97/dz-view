export const useDzAlert = ({ props }) => {
  const themeMap = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      iconColor: 'text-green-400',
      textColor: 'text-gray-800',
      icon: 'ic:round-check-circle-outline',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      iconColor: 'text-red-400',
      textColor: 'text-gray-800',
      icon: 'ic:outline-dangerous',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      iconColor: 'text-blue-400',
      textColor: 'text-gray-800',
      icon: 'ic:outline-info',
    },
    warn: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      iconColor: 'text-yellow-400',
      textColor: 'text-gray-800',
      icon: 'ic:round-error-outline',
    },
    default: {
      bg: 'bg-gray-50',
      border: 'border-gray-300',
      iconColor: 'text-gray-400',
      textColor: 'text-gray-800',
      icon: '',
    },
  };

  const toThemeOption = ({ props }) => {
    const { type } = props;
    if (!type) return themeMap.default;

    return themeMap[type];
  };

  const themeOption = toThemeOption({ props });

  return {
    themeOption,
  };
};
