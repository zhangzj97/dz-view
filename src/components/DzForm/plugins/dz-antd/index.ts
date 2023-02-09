const result: any = { modules: { Cell: {}, FormItem: {} }, list: [] };
const fileHandler = ([key, value]: [string, any]) => {
  const componentName = `${key.replace(/\.\/|\/index\.vue/g, '')}`;
  if (componentName.match(/^Cell/)) {
    result.modules.Cell[componentName] = value.default;
  } else if (componentName.match(/^FormItem/)) {
    result.modules.FormItem[componentName] = value.default;
  }
};
const fileMap = import.meta.glob('./*/index.vue', { eager: true });
Object.entries(fileMap).forEach(fileHandler);

export const componentMap = result.modules;
