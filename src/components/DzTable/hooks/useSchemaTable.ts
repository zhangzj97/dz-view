import { findComponent } from '@/plugins';
import { isString, isFunction } from '@vueuse/core';

export const useSchemaTable = ({ moduleName, option }) => {
  const { ViewName, i18nSeparator } = inject('config') as any;
  const { pluginName, pluginType, pluginScope } = option as any;

  const loggerState = reactive<any>({ list: [] });

  const fixId = ({ id, key }) => {
    if (id) {
      return id;
    } else if (key) {
      return key;
    } else {
      loggerState.list.push({ message: `[warn] [${moduleName}] [fixId]` });
    }
  };

  const fixKey = ({ key }) => {
    if (key) {
      return key;
    } else {
      loggerState.list.push({ message: `[warn] [${moduleName}] [fixKey]` });
    }
  };

  const fixComponent = ({ component }) => {
    if (!component) {
      return () => findComponent({ name: pluginName, type: pluginType, scope: pluginScope });
    } else if (isString(component)) {
      return () => findComponent({ name: component, type: pluginType, scope: pluginScope });
    } else if (isFunction(component)) {
      return component;
    } else {
      loggerState.list.push({ message: `[warn] [${moduleName}] [fixComponent]` });
    }
  };

  const fixLabel = ({ key, alias }) => {
    if (alias) {
      return [ViewName, moduleName, 'SCHEMA', alias].join(i18nSeparator);
    } else if (key) {
      return [ViewName, moduleName, 'SCHEMA', key].join(i18nSeparator);
    }
  };
  const fixTooltip = ({ tooltip }) => {
    return [ViewName, moduleName, 'TEXT', tooltip].join(i18nSeparator);
  };
  const fixText = ({ text }) => {
    return [ViewName, moduleName, 'TEXT', text].join(i18nSeparator);
  };

  const fixVisible = ({ visible }) => visible;
  const fixRequired = ({ required }) => required;
  const fixReadonly = ({ readonly }) => readonly;

  const fixSource = ({ source }) => {
    return [ViewName, 'SOURCE', source].join(i18nSeparator);
  };
  const fixDict = ({ dict }) => {
    return [ViewName, 'Dict', dict].join(i18nSeparator);
  };

  const fixRule = ({ rule }) => rule || [];

  const fixConventionOption = ({ size, position }) => {
    return { size, position };
  };

  const fixCustomOption = ({ props }) => props || {};

  const fixLabelOption = ({ labelOption }) => {
    if (!labelOption) labelOption = {};
    const size = labelOption.size || option.labelPosition.size;
    const position = labelOption.position || option.labelPosition.position;
    return { size, position };
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

  const fixSchema = item => {
    return {
      id: fixId(item),
      key: fixKey(item),

      component: fixComponent(item),

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
      cellOption: fixCellOption(item),
      controlOption: fixControlOption(item),
    };
  };

  return {
    fixSchema,
  };
};
