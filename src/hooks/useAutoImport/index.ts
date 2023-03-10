export const useAutoImport = () => {
  const lintPath = ({ path, file }) => {
    if (path.match(/__.*__\/index\.vue/)) {
      return {
        code: 100,
        title: '',
        message: '双下划线的文件夹 存在 index.vue, like: __dir__/index.vue ',
        suggestion: [
          '方案一. 如果 index.vue 没有用, 请删除',
          '方案二. 如果 index.vue 有用, 请改变文件结构, to be: __dir__/CellDemo/index.vue ',
        ],
      };
    }
    return {};
  };

  // 文件路径检查
  const lintPathLog = ({ path, file }) => {
    const lintResult = lintPath({ path, file });
    if (lintResult.code) {
      const { message, title, suggestion } = lintResult;

      console.group('[LintPath]', `[${title || '其他错误'}]`, path);
      console.error('文件路径: ', path);
      console.error('错误内容: ', message);
      if (suggestion) {
        suggestion.forEach((item: unknown) => console.warn(item));
      }
      console.log('');
      console.groupEnd();
    }
  };

  // 获取结果
  const toResult = ({ fileMap, toKey, toValue }) =>
    Object.fromEntries(
      Object.entries(fileMap).map(([path, file]) => {
        const key = toKey({ path, file });
        const value = toValue({ path, file });

        lintPathLog({ path, file });
        return [key, value];
      })
    );

  const toKeyWithModules = ({ path, scope }) => {
    return path
      .replace(/__.*?__\//, '')
      .replace(/^.\/modules\//g, '')
      .replace(/\/index.(ts|vue|js)$/, '')
      .replace(/^/, `@${scope}/`);
  };

  return {
    toResult,
    toKeyWithModules,
  };
};
