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

    // TODO 性能测试
    // tree 先转map 再转lit
    const loopToMap = option => item => {
      const { id, children } = item;

      if (children?.length === 0) {
        formatedMap[id] = {
          ...item,
          children: [],
        };
      } else {
        children.forEach(loopToMap({}));
        formatedMap[id] = {
          ...item,
          children: children.map(item => item.id),
        };
      }
    };
    const formatedMap = {};
    tree.forEach(loopToMap({}));
    const formatedList = Object.entries(formatedMap).map(([, value]) => value);

    // /// tree 先转list 再转map
    // const loopToList = option => item => {
    //   const { id, children } = item;

    //   if (children?.length === 0) {
    //     formatedList.push({
    //       ...item,
    //       children: [],
    //     });
    //   } else {
    //     children.forEach(loopToList({}));
    //     formatedList.push({
    //       ...item,
    //       children: children.map(item => item.id),
    //     });
    //   }
    // };
    // const formatedList: any[] = [];
    // tree.forEach(loopToList({}));
    // const formatedMap2 = Object.fromEntries(
    //   formatedList.map(item => [item?.id, item])
    // );
    // ///

    return {
      list: formatedList,
      map: formatedMap,
      tree,
    };
  };

  return {
    toMap,

    formatTree,
  };
};
