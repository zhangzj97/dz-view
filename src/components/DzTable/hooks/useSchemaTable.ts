import { useService } from '@/hooks/useService';
import { isFunction } from '@vueuse/core';

const { dispatch } = useService();

export const useSchemaTable = ({ moduleName, option, config }) => {
  const { ViewName } = config;

  const loggerState = reactive<any>({ list: [] });

  const fixCode = ({ code }) => {
    if (code) {
      return code;
    } else {
      loggerState.list.push({ message: `[warn] [${moduleName}] [fixCode]` });
    }
  };

  const fixComponent = async ({ component }) => {
    if (isFunction(component)) return component;
    const pluginCode = component.replace(/^([^@])/, '@SourcePluginApp/Cell$1');
    const { data } = await dispatch('SourcePlugin.FindModule', {
      moduleName: pluginCode,
    });
    return () => data;
  };

  const fixLabel = ({ code, alias }) => {
    if (alias) {
      return [`@${ViewName}`, moduleName, 'SCHEMA', alias].join('.');
    } else if (code) {
      return [`@${ViewName}`, moduleName, 'SCHEMA', code].join('.');
    }
  };
  const fixTooltip = ({ tooltip }) => {
    if (tooltip) return [`@${ViewName}`, moduleName, 'TEXT', tooltip].join('.');
    else return false;
  };
  const fixText = ({ text }) => {
    if (text) return [`@${ViewName}`, moduleName, 'TEXT', text].join('.');
    else return false;
  };

  const fixVisible = ({ visible }) => {
    if (!isDefined(visible)) return option.visible;
    return visible;
  };
  const fixRequired = ({ required }) => {
    if (!isDefined(required)) return option.required;
    return required;
  };
  const fixReadonly = ({ readonly }) => {
    if (!isDefined(readonly)) return option.readonly;
    return readonly;
  };

  const fixSource = ({ source }) => {
    return source;
  };
  const fixDict = ({ dict }) => {
    return dict;
  };

  const fixRule = ({ rule }) => rule || [];

  const fixConventionOption = ({ size, position }) => {
    return { size, position };
  };

  const fixCustomOption = ({ props }) => props || {};

  const fixLabelOption = ({ labelOption }) => {
    if (!labelOption) labelOption = {};
    const size = labelOption.size || option.labelOption.size;
    const position = labelOption.position || option.labelOption.position;
    return { size, position };
  };

  const fixFormItemOption = ({ formItemOption }) => {
    if (!formItemOption) formItemOption = {};
    const layout = formItemOption.layout || option.formItemOption.layout;
    const size = formItemOption.size || option.formItemOption.size;
    const position = formItemOption.position || option.formItemOption.position;
    return { layout, size, position };
  };

  const fixCellOption = ({ cellOption }) => {
    if (!cellOption) cellOption = {};
    const size = cellOption.size || option.cellOption.size;
    const position = cellOption.position || option.cellOption.position;
    return { size, position };
  };

  const fixControlOption = ({ controlOption }) => {
    if (!controlOption) controlOption = {};
    const size = controlOption.size || option.controlOption.size;
    const position = controlOption.position || option.controlOption.position;
    return { size, position };
  };

  const fixWidth = ({ width }) => {
    return width || 200;
  };

  const fixSchema = async (item: any) => {
    return {
      code: fixCode(item),

      component: await fixComponent(item),

      label: fixLabel(item),
      tooltip: fixTooltip(item),
      text: fixText(item),

      visible: fixVisible(item),
      required: fixRequired(item),
      readonly: fixReadonly(item),

      source: fixSource(item),
      dict: fixDict(item),

      rule: fixRule(item),

      conventionOption: fixConventionOption(item),
      customOption: fixCustomOption(item),

      labelOption: fixLabelOption(item),
      formItemOption: fixFormItemOption(item),
      cellOption: fixCellOption(item),
      controlOption: fixControlOption(item),

      width: fixWidth(item),
    };
  };

  const rawToFixedSchema = async ({ list }) =>
    await Promise.all(list.map(fixSchema));

  return {
    rawToFixedSchema,
  };
};
