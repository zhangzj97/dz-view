export const useValidate = () => {
  const isUndefined = (v: unknown): v is undefined => v === undefined;
  const isNull = (v: unknown): v is null => v === null;
  const isString = (v: unknown): v is string => typeof v === 'string';
  const isNumber = (v: unknown): v is number => typeof v === 'number';
  const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean';

  const isArray = (v: unknown): v is unknown[] => Array.isArray(v);
  /**
   * @deprecate
   */
  const isArrayExist = (v: unknown): v is unknown[] => Array.isArray(v) && v.length > 0;

  const isEmpty = (v: unknown): v is unknown[] => {
    if (v === '' || v === undefined || v === null) return true;
    if (typeof v === 'object' && Object.keys(v).length === 0) return true;
    return false;
  };

  const findDefined = (list: unknown[]) => {
    return list.find(item => !isUndefined(item));
  };

  const is = {
    Undefined: isUndefined,
    Null: isNull,
    String: isString,
    Boolean: isBoolean,
    Number: isNumber,
    Array: isArray,
    Empty: isEmpty,
  };

  return {
    isUndefined,
    isNull,
    isString,
    isBoolean,
    isNumber,
    isArray,
    /**
     * @deprecate
     */
    isArrayExist,

    isEmpty,

    is,

    findDefined,
  };
};
