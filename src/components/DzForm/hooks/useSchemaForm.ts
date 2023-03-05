import { usePlugin } from '@/hooks/usePlugin';
import { isString, isFunction } from '@vueuse/core';

const { findPlugin } = usePlugin();

export const useSchemaForm = ({ moduleName, option }) => {
  const { ViewName, i18nSeparator } = inject('config') as any;
  const { pluginOption } = option as any;

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
      return () => findPlugin({ name: pluginOption.name, type: pluginOption.type, scope: pluginOption.scope });
    } else if (isString(component)) {
      return () => findPlugin({ name: component, type: pluginOption.type, scope: pluginOption.scope });
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
    if (tooltip) return [ViewName, moduleName, 'TEXT', tooltip].join(i18nSeparator);
    else return false;
  };
  const fixText = ({ text }) => {
    if (text) return [ViewName, moduleName, 'TEXT', text].join(i18nSeparator);
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
      formItemOption: fixFormItemOption(item),
      cellOption: fixCellOption(item),
      controlOption: fixControlOption(item),
    };
  };

  return {
    fixSchema,
  };
};
