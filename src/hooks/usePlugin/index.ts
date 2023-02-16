import SourcePlugin from '@/plugins';

export const usePlugin = () => {
  const SourcePluginFlat = Object.values(SourcePlugin).flat();

  const findPlugin = ({ name, type, scope }) => {
    return SourcePluginFlat[`${scope}/${type}${name}`];
  };

  return {
    SourcePlugin,
    SourcePluginFlat,

    findPlugin,
  };
};
