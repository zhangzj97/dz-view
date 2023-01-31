export const removeAttrs = (attrName, list) => {
  return list.map(item => {
    const result = { ...item };
    result[attrName] = undefined;
    result.children = removeAttrs(attrName, result.children || []);
    return result;
  });
};
