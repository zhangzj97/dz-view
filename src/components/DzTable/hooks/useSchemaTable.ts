import { isString, isFunction } from '@vue/shared';
import { componentMap } from '../plugins';

const componentDefault = componentMap.Cell.CellText;

export const useSchemaTable = ({ moduleName }) => {
  const fixType = ({ component, type }) => {};

  const fixComponent = ({ component }) => {
    if (isString(component)) {
      return () => componentMap.Cell[`Cell${component}`];
    } else if (isFunction(component)) {
      return () => component;
    } else {
      return () => componentDefault;
    }
  };

  const fixField = ({ field }) => {
    return field;
  };

  const fixMaxWidth = ({ width, maxWidth }) => {};
  const fixPattern = ({ pattern, required, readonly, visible }) => {};
  const fixCellOption = ({ size, position }) => {
    return { size, position };
  };

  const fixCustomOption = ({ props }) => {
    return props || {};
  };

  const fixReadonly = ({ readonly }) => {};
  const fixVisible = ({ visible }) => {};
  const fixRequired = ({ required }) => {};
  const fixTitle = ({ title, field }) => {
    return title;
  };
  const fixSource = ({ source }) => {};
  const fixWidth = ({ width, maxWidth }) => {};
  const fixTooltip = ({ tooltip }) => {
    return tooltip;
  };

  const fixSchema = item => {
    return {
      field: fixField(item),
      title: fixTitle(item),
      component: fixComponent(item),
      cellOption: fixCellOption(item),
      customOption: fixCustomOption(item),
      tooltip: fixTooltip(item),
    };
  };

  return {
    fixSchema,
  };
};
