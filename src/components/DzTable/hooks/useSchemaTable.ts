import { isString, isFunction } from '@vue/shared';
import { componentMap } from '../plugins';

const componentDefault = 'Text';
const componentType = 'Cell';

interface SchemaTable {
  field: string;
  title?: string;
  component: string | Function;
  labalCompoent?: any;

  size?: string;
  position?: string;

  option: any;
  labelOption: any;
}

export const useSchemaTable = ({ moduleName, option }) => {
  const fixType = ({ component }) => {
    if (['xxx'].includes(component)) {
      return component;
    }
  };

  const fixComponent = ({ component }) => {
    if (['xxx'].includes(component)) {
      return '';
    }

    if (!component) component = componentDefault;

    if (isString(component)) {
      return () => componentMap[componentType][`${componentType}${component}`];
    } else if (isFunction(component)) {
      return component;
    }
  };

  const fixRule = ({ pattern, required, readonly, visible, rule }) => {
    const ruleList = [...rule];
    if (required === true) {
      const requiredRule = { pattern: /\w/, message: ({ title }) => `请填入${title}` };
      ruleList.unshift(requiredRule);
    }
    if (pattern === true) {
      const requiredPattern = { pattern, message: ({ title }) => `不符合规范` };
      ruleList.unshift(requiredPattern);
    }
  };

  // Component
  const fixOption = ({ size, position }) => {
    return { size, position };
  };
  const fixLabelOption = ({ labelOption }) => {
    if (!labelOption) labelOption = {};
    return {
      position: labelOption.position || option.labelPosition,
      size: labelOption.size || option.labelSize,
    };
  };

  const fixCustomOption = ({ props }) => props || {};

  const fixVisible = ({ visible }) => visible;
  const fixSource = ({ source }) => source;
  const fixWidth = ({ width }) => width;
  const fixTooltip = ({ tooltip }) => tooltip;
  const fixField = ({ field }) => field;
  const fixMaxWidth = ({ maxWidth }) => maxWidth;
  const fixPattern = ({ pattern }) => pattern;
  const fixRequired = ({ required }) => required;
  const fixReadonly = ({ readonly }) => readonly;
  const fixTitle = ({ title, field }) => title;

  const fixSchema = item => {
    return {
      type: fixType(item),
      field: fixField(item),
      title: fixTitle(item),
      component: fixComponent(item),

      option: fixOption(item),
      labelOption: fixLabelOption(item),
      customOption: fixCustomOption(item),

      tooltip: fixTooltip(item),
      rule: fixRule(item),
    };
  };

  return {
    fixSchema,
  };
};
