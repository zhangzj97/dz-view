import { useAutoImport } from '@/hooks/useAutoImport';

const scopeKey = 'Custom';

const fileMap = import.meta.glob(['./**/index.ts'], { eager: true });

const toKey = ({ path }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /^\.\//, replace: '' },
    { search: /\/index\.ts$/, replace: '' },
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
    { search: /^\.\//, replace: '' },
    { search: /\/index\.ts$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  const key = replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);

  const code = key.replace(/^@.*?\//, '');

  return {
    id: String(Math.random() * 10000),
    code,
    scope: scopeKey,

    useService: file.useService,
  };
};

const { result } = useAutoImport({ fileMap, toKey, toValue });

export default result.modules;

export { scopeKey };
