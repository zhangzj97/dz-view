import { isString, isFunction } from '@vueuse/core';
import { useSourcePluginStore } from '@/hooks/useSourceStore';
const { findPlugin } = useSourcePluginStore();

export const useForm = ({ moduleName, schema }) => {
  const { fixSchemaData, fixSchemaProps, schemaDom, fixSchemaVersion } =
    useFormSchema({
      moduleName,
      schema,
    });

  const formState = reactive({
    entity: Object.assign({}, schema.defaultValue),
    schema: fixSchemaData(schema),
    schemaProps: fixSchemaProps(schema),
    schemaDom: schemaDom(schema),
    schemaVersion: fixSchemaVersion(schema),
  });

  const getEntity = () => formState.entity;

  const entity = computed(() => formState.entity);

  const setEntity = async ({ entity }) => {
    formState.entity = entity;
  };

  const resetEntity = () => {
    formState.entity = schema.defaultValue;
  };

  const clearEntity = () => {
    formState.entity = {};
  };

  const mergeEntity = async ({ entity }) => {
    Object.assign(formState.entity, entity);
  };

  const setValue = (code: string, value) => {
    formState.entity[code] = value;
    formState.schemaVersion[code] = String(Math.random());
  };

  const getValue = code => {
    return formState.entity[code];
  };

  const setSchema = (code: string, { visible, required, readonly }) => {
    isDefined(visible) && (formState.schema[code].visible = visible);
    isDefined(required) && (formState.schema[code].required = required);
    isDefined(readonly) && (formState.schema[code].readonly = readonly);
  };

  const formDom = ref();

  return {
    formDom,
    entity,
    formState,

    getEntity,
    setEntity,
    resetEntity,
    clearEntity,
    mergeEntity,

    getValue,
    setValue,

    setSchema,
  };
};

const useFormSchema = ({ moduleName, schema }) => {
  const fixComponent = (code: string, { component }) => {
    if (!component) {
      return findPlugin({ code: '@SourcePluginApp/ControlText' });
    } else if (isString(component) && component.match(/@/)) {
      return findPlugin({ code: component });
    } else if (isString(component) && !component.match(/@/)) {
      return findPlugin({ code: `@SourcePluginApp/Control${component}` });
    } else if (isFunction(component)) {
      return component;
    }
  };

  const fixService = (code: string, { service }) => service;

  const fixLabel = (code: string, { label }) =>
    [moduleName, 'SCHEMA', label || code].join('.');

  const fixTooltip = (code: string, { tooltip }) =>
    tooltip ? [moduleName, 'TEXT', tooltip].join('.') : false;

  const fixText = (code: string, { text }) =>
    text ? [moduleName, 'TEXT', text].join('.') : false;

  const fixReadonly = (code: string, { readonly }) =>
    isDefined(readonly) ? readonly : schema.config.readonly;

  const fixRequired = (code: string, { required }) =>
    isDefined(required) ? required : schema.config.required;

  const fixVisible = (code: string, { visible }) =>
    isDefined(visible) ? visible : schema.config.visible;

  const fixLayout = (code: string, { layout }) =>
    layout || schema.layout?.[code] || schema.config.layout;

  const fixSchemaData = ({ data }) =>
    Object.fromEntries(
      Object.entries(data).map(([code, item]: any) => [
        code,
        {
          readonly: fixReadonly(code, item),
          required: fixRequired(code, item),
          visible: fixVisible(code, item),

          service: fixService(code, item),

          label: fixLabel(code, item),
          tooltip: fixTooltip(code, item),
          text: fixText(code, item),
        },
      ])
    );

  const fixSchemaProps = ({ data }) =>
    Object.fromEntries(
      Object.entries(data).map(([code, item]: [string, any]) => [
        code,
        {
          component: fixComponent(code, item),
          layout: fixLayout(code, item),
        },
      ])
    );

  const schemaDom = ({ data }) =>
    Object.fromEntries(
      Object.entries(data).map(([code]: any) => [code, ref()])
    );

  const fixSchemaVersion = ({ data }) =>
    Object.fromEntries(
      Object.entries(data).map(([code]: any) => [code, String(Math.random())])
    );

  return {
    fixSchemaData,
    fixSchemaProps,
    schemaDom,
    fixSchemaVersion,
  };
};
