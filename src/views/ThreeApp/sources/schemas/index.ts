import { useAutoImport } from '@/hooks/useAutoImport';
import { config } from '../../config';
const { ScopeCode } = config;
const { toResult, toKeyWithModules } = useAutoImport();

const fileMap = import.meta.glob(['./modules/*/index.ts'], {
  eager: true,
});
const toKey = ({ path }) => toKeyWithModules({ path, scope: ScopeCode });
const toValue = ({ file }) => file.default;

export default toResult({ fileMap, toKey, toValue });
