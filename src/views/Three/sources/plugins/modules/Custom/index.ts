import { useAutoImport } from '@/hooks/useAutoImport';
import { config } from '../../../../config';

const scopeKey = config.ViewName;

const fileMap = import.meta.glob(
  ['./**/*/index.vue', '!./**/components/**/index.vue'],
  { eager: true }
);

const toKey = ({ path }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /\.+\//g, replace: '' },
    { search: /\/index\.vue$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  return replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);
};

const toValue = ({ path, file }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /\.+\//g, replace: '' },
    { search: /\/index\.vue$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  const id = replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);

  return {
    id,
    default: file.default,
  };
};

const { result } = useAutoImport({ fileMap, toKey, toValue });

export default result.modules;

export { scopeKey };
