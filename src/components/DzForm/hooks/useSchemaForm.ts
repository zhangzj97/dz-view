import { isString, isFunction } from '@vue/shared';
import { componentMap } from '../plugins';

const componentDefault = 'Input';
const componentType = 'FormItem';

interface SchemaForm {
  field: string;
  title?: string;
  component: string | Function;
  labalCompoent?: any;

  size?: string;
  position?: string;

  option: any;
  labelOption: any;
}

export const useSchemaForm = ({ moduleName, option }) => {
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
      console.log(component);
      return () => componentMap[componentType][`${componentType}${component}`];
    } else if (isFunction(component)) {
      return component;
    }
  };

  const fixRule = ({ rule }) => rule || [];

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

  const fixLayoutOption = ({ labelOption, formItemOption, size, layout, position }) => {
    if (!labelOption) labelOption = {};
    if (!formItemOption) formItemOption = {};
    const labelAndFormItemLayout = layout || option.labelAndFormItemLayout;
    const labelAndFormItemSize = size || option.labelAndFormItemSize;
    const labelAndFormItemPosition = position || option.labelAndFormItemPosition;

    const labelLayout = labelOption.layout || option.labelLayout;
    const labelSize = labelOption.size || option.labelSize;
    const labelPosition = labelOption.position || option.labelPosition;

    const formItemLayout = formItemOption.layout || option.formItemLayout;
    const formItemSize = formItemOption.size || option.formItemSize;
    const formItemPosition = formItemOption.position || option.formItemPosition;

    return {
      ...{ labelAndFormItemLayout, labelAndFormItemSize, labelAndFormItemPosition },
      ...{ labelLayout, labelSize, labelPosition },
      ...{ formItemLayout, formItemSize, formItemPosition },
    };
  };

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

      layoutOption: fixLayoutOption(item),
    };
  };

  return {
    fixSchema,
  };
};
