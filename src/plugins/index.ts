const result: any = { modules: { Cell: {}, Control: {}, Action: {}, Header: {} }, list: [] };
const fileHandler = ([key, value]: [string, any]) => {
  const componentName = `@${key.replace(/\.\/|\/index\.vue/g, '')}`;
  if (componentName.match(/\/Cell/)) {
    result.modules.Cell[componentName] = value.default;
  } else if (componentName.match(/\/Control/)) {
    result.modules.Control[componentName] = value.default;
  } else if (componentName.match(/\/Action/)) {
    result.modules.Action[componentName] = value.default;
  } else if (componentName.match(/\/Header/)) {
    result.modules.Header[componentName] = value.default;
  }
};
const fileMap = import.meta.glob('./**/*/index.vue', { eager: true });
Object.entries(fileMap).forEach(fileHandler);

export const findComponent = ({ name, type, scope }) => {
  return result.modules[type][`${scope}/${type}${name}`];
};
