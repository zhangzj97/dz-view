export const toAccessMenu = ({ access }) => {
  return {};
};
export const toAccessPermission = ({ access }) => {
  return {};
};
export const toAccessRoute = ({ access }) => {
  return {};
};
export const toAccessRouteTag = ({ access }) => {
  return {};
};

export const toApiService = ({ api }) => {
  return {};
};

export const toSourceRaw = ({ fileMap }) =>
  Object.entries(fileMap).reduce(
    (prev, [, item]: any) => Object.assign(prev, item.default),
    {}
  );
