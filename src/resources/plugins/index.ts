import { plugins as PluginsBasePlugin } from '@/apps/BasePlugin/common/plugins';

export const plugins = {
  Cell: {
    ...PluginsBasePlugin.Cell,
  },

  Control: {
    ...PluginsBasePlugin.Control,
  },
};
