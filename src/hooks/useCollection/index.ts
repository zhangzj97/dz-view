export const useCollection = () => {
  const toMap = ({ list }) => {
    const map = Object.fromEntries(
      list.map((item: any) => [
        String(item.id),
        {
          id: item.id,
          parentId: item.parentId,
          ...item,
        },
      ])
    );
    return map;
  };

  const buildTreeIndexMap = ({ list }) => {
    const treeIndexMap = { 0: [] };

    list.forEach(item => {
      const { id, parentId } = item;
      if (!id || !parentId) {
        console.warn('数据错误', item);
        return;
      }

      if (String(parentId) === '0') {
        treeIndexMap[0].push(id);
        return;
      }

      if (!treeIndexMap[parentId]) {
        treeIndexMap[parentId] = [id];
        return;
      }

      if (treeIndexMap[parentId]) {
        treeIndexMap[parentId].push(id);
        return;
      }
    });

    return treeIndexMap;
  };

  const formatTree = ({ list }) => {
    const map = toMap({ list });

    const treeIndexMap = buildTreeIndexMap({ list });

    if (treeIndexMap[0]?.length === 0) {
      console.warn('数据错误, 没有一级数据');
    }

    const loopFixTree = option => item => {
      const id = item;

      const { level, treePath } = option;

      const newTreePath = `${treePath},${id}`.replace(/^,|,$/g, '');

      if (!treeIndexMap[id] || treeIndexMap[id]?.length === 0) {
        return {
          ...map[id],
          level,
          treePath: newTreePath,
          children: [],
        };
      } else {
        return {
          ...map[id],
          level,
          treePath: newTreePath,
          children: treeIndexMap[id].map(
            loopFixTree({ level: level + 1, treePath: newTreePath })
          ),
        };
      }
    };
    const tree = treeIndexMap[0].map(loopFixTree({ level: 1, treePath: '' }));

    const loopToMap = option => item => {
      const { id, children } = item;

      if (children?.length === 0) {
        treeMap[id] = {
          ...item,
          children: [],
        };
      } else {
        children.forEach(loopToMap({}));
        treeMap[id] = {
          ...item,
          children: children.map(item => item.id),
        };
      }
    };
    const treeMap = {};
    tree.forEach(loopToMap({}));

    console.log({ tree, treeMap });
    return {
      map: treeMap,
      tree,
    };
  };

  return {
    toMap,

    formatTree,
  };
};
