import SourceEnum from '@/sources/enums';
import SourceFile from '@/sources/files';
import SourceLocale from '@/sources/locales';
import SourcePermission from '@/sources/permissions';
import SourceRole from '@/sources/roles';
import SourceRoute from '@/sources/routes';
import SourceSchema from '@/sources/schemas';
import SourceTenant from '@/sources/tenants';

export const useSource = () => {
  return {
    SourceEnum,
    SourceFile,
    SourceLocale,
    SourcePermission,
    SourceRole,
    SourceRoute,
    SourceSchema,
    SourceTenant,
  };
};
