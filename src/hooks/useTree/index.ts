export const useTree = () => {
  const listToTree = ({ list }) => {
    const result = {};

    const map = Object.fromEntries(
      list.map((item: any) => [String(item.id), { children: [], ...item }])
    );

    list.forEach((item: any) => {
      let { id, parentId } = item;
      id = String(id);
      parentId = String(parentId);

      // 子 族谱有父亲
      if (parentId && map[parentId]) {
        map[parentId].children.push(map[id]);
        // 子 族谱无父亲 视为 问题数据 或者 升格成祖宗
      } else if (parentId && !map[parentId]) {
        result[id] = map[id];
        // 祖宗 族谱记名
      } else if (!parentId) {
        result[id] = map[id];
      }
    });

    return Object.values(result);
  };

  return { listToTree };
};
