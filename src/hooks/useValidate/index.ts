export const useValidate = () => {
  const isUndefined = (v: unknown): v is undefined => v === undefined;
  const isNull = (v: unknown): v is null => v === null;
  const isString = (v: unknown): v is string => typeof v === 'string';
  const isNumber = (v: unknown): v is number => typeof v === 'number';
  const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean';

  const isArray = (v: unknown): v is unknown[] => Array.isArray(v);
  const isArrayExist = (v: unknown): v is unknown[] =>
    Array.isArray(v) && v.length > 0;

  const findDefined = (list: unknown[]) => {
    return list.find(item => !isUndefined(item));
  };
  return {
    isUndefined,
    isNull,
    isString,
    isBoolean,
    isNumber,
    isArray,
    isArrayExist,

    findDefined,
  };
};
