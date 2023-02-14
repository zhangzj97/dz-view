import { useAutoImport } from '@/hooks/useAutoImport';
import { config } from '../config';

const scopeKey = config.ViewName;

const fileMap = import.meta.glob(['./**/index.vue', '!./**/components/**/index.vue'], { eager: true });

const lintPath = ({ path }) => {
  if (path.match(/__.*__\/index\.vue/)) {
    return {
      code: 100,
      message: '双下划线的文件夹 存在 index.vue, like: __dir__/index.vue ',
      suggestion: ['方案一. 如果 index.vue 没有用, 请删除', '方案二. 如果 index.vue 有用, 请改变文件结构, to be: __dir__/CellDemo/index.vue '],
    };
  }
  return {};
};

const toKey = ({ path }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /^\.\//, replace: '' },
    { search: /\/index\.vue$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  return replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);
};

const toValue = ({ file }) => {
  return file.default;
};

const { result } = useAutoImport({ fileMap, toKey, toValue, lintPath });

export default result.modules;

export { scopeKey };
