import { useAutoImport } from '@/hooks/useAutoImport';

const fileMap = import.meta.glob(['@/views/*/sources/schemas/index.ts'], { eager: true });

const toKey = ({ file }) => {
  return `@${file.scopeKey}`;
};

const toValue = ({ file }) => {
  return file.default;
};

const { result } = useAutoImport({ fileMap, toKey, toValue });

export default result.modules;
