import { useAutoImport } from '@/hooks/useAutoImport';
import { config } from '../../../../config';

const scopeKey = config.ViewName;

const fileMap = import.meta.glob(['../../../../pages/**/index.vue', '!../../../../pages/**/components/**/index.vue'], { eager: true });

const toKey = ({ path }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /\.+\//g, replace: '' },
    { search: /pages\//, replace: '' },
    { search: /\/index\.vue$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  return replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);
};

const toValue = ({ path }) => {
  const replaceStrategy = [
    { search: /__.*__\//g, replace: '' },
    { search: /\.+\//g, replace: '' },
    { search: /pages\//, replace: '' },
    { search: /\/index\.vue$/, replace: '' },
    { search: /^/, replace: `@${scopeKey}/` },
  ];

  const key = replaceStrategy.reduce((previousValue, currentValue) => {
    const { search, replace } = currentValue;
    return previousValue.replace(search, replace);
  }, path);

  const code = key.replace(/^@.*?\//, '');

  return {
    id: code,
    code,
    scope: scopeKey,

    component: code,
    icon: 'ic:twotone-yard',
    path: `/${code}`,
    redirct: `/${code}`,
    target: '_self',
    url: '',
    showMenu: true,
    parentId: scopeKey,
    parentCode: scopeKey,
  };
};

const { result } = useAutoImport({ fileMap, toKey, toValue });

export default result.modules;

export { scopeKey };
