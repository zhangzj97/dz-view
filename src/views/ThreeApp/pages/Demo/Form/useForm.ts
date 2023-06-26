export const useForm = ({ schema }) => {
  const option = {
    readonly: false,
    visible: true,
    required: false,
  };

  const entityState = reactive({
    entity: {},
    version: Object.fromEntries(
      schema.map((item: any) => [item.code, Math.random()])
    ),
    readonly: Object.fromEntries(
      schema.map((item: any) => [
        item.code,
        isDefined(item.readonly) ? item.readonly : option.readonly,
      ])
    ),
    visible: Object.fromEntries(
      schema.map((item: any) => [
        item.code,
        isDefined(item.visible) ? item.visible : option.visible,
      ])
    ),
    required: Object.fromEntries(
      schema.map((item: any) => [
        item.code,
        isDefined(item.required) ? item.required : option.required,
      ])
    ),
    dom: Object.fromEntries(schema.map((item: any) => [item.code, ref()])),
  });

  const formDom = ref();

  const setValue = (code: string, value: any) => {
    entityState.entity[code] = value;
    entityState.version[code] = Math.random();
  };

  const setEntity = async ({ entity }) => {
    Object.assign(entityState.entity, entity);
  };

  const getEntity = async () => {
    return entityState.entity;
  };

  const setState = (code, { readonly, required, visible }) => {
    if (isDefined(readonly)) {
      entityState.readonly[code] = readonly;
    }

    if (isDefined(required)) {
      entityState.required[code] = required;
    }

    if (isDefined(visible)) {
      entityState.visible[code] = visible;
    }
  };

  return {
    entityState,
    formDom,

    setState,
    setValue,

    setEntity,
    getEntity,
  };
};
