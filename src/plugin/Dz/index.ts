//
const fileToKey = ({ path, file }) => {
  // const keyName = `@${filePath.replace(/\.\/|__.*__\/|\/index\.vue/g, '')}`;
  const key = glob.replace(/__.*__\//g, '').replace(/\/index\.vue/g, '');

  return '';
};

const fileToValue = ({ path, file }) => {};

interface AutoImportResult {
  modules: Record<string, unknown>;
  list: unknown[];
}

// Export tool
export const findComponent = ({ name, type, scope }) => {
  return result.modules[`${scope}/${type}${name}`];
};

const result: AutoImportResult = { modules: {}, list: [] };

const fileHandler = ([path, file]: [string, any]) => {
  const key = fileToKey({ path, file });
  const value = fileToValue({ path, file });
  result.modules[key] = value;
};
const fileMap = import.meta.glob(['./**/*/index.vue'], { eager: true });
Object.entries(fileMap).forEach(fileHandler);

export const plugin = result.modules;
