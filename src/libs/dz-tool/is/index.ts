export const isDefined = (value: any) => value !== undefined;

export const isString = (value: any) => typeof value === 'string';

export const isNumber = (value: any) => typeof value === 'number' && !isNaN(value);

export const isNaN = (value: any) => isNaN(value);

export const isArray = (value: any) => Array.isArray(value);

export const isFunction = (value: any) => Object.prototype.toString.call(value) === '[object Function]';
