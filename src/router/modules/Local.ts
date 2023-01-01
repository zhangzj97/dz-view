const result: any = { modules: {}, list: [] };
const fileHandler = ([, value]: [string, any]) => {
  result.list.push(...(value?.route || []));
};
const fileMap = import.meta.glob('@/views/*/routes/index.ts', { eager: true });
Object.entries(fileMap).forEach(fileHandler);

export const route = result.list;
