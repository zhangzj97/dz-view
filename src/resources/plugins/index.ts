import { plugins as PluginRaw } from '@/apps/PluginRaw/common/plugins';

export const plugins = {
  Cell: {
    ...PluginRaw.Cell,
  },

  Control: {
    ...PluginRaw.Control,
  },
};
