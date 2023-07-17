import { plugins as PluginRaw } from '@/apps/PluginRaw/common/plugins';
import { plugins as PluginArco } from '@/apps/PluginArco/common/plugins';

export const plugins = {
  Cell: {
    ...PluginRaw.Cell,
    ...PluginArco.Cell,
  },

  Control: {
    ...PluginRaw.Control,
    ...PluginArco.Control,
  },
};
