export const useValidate = () => {
  const isString = (value: any) => typeof value === 'string';

  const isBoolean = (value: any) => typeof value === 'boolean';

  const isUndefined = (value: any) => typeof value === 'undefined';

  const isEmpty = (value: any) => {
    if (!Array.isArray(value)) return true;
    return value.length > 0;
  };

  const findDefined = (list: any[]) => list.find(item => !isUndefined(item));

  return {
    isString,
    isBoolean,
    isUndefined,
    isEmpty,

    findDefined,
  };
};
