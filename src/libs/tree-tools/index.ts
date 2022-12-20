const isArray = Array.isArray;
const isObject = thisArg => {
  return Object.prototype.toString.call(thisArg) === '[object Object]';
};

interface EntityWithId {
  id: string;
  code?: string;
}

type EntityChildren<T> = T[] | Record<string, T>;
interface EntityWithTree<T> {
  parentId: string;
  path: string;
  level: string;
  children: EntityChildren<T>;
}

interface EntityItem extends EntityWithId, Partial<EntityWithTree<EntityItem>> {
  [key: string]: unknown;
}

type EntityItemList = EntityItem[];
type EntityItemTreeList = EntityItem[];
type EntityItemListMap = Record<string, EntityItem>;
type EntityItemTreeListMap = Record<string, EntityItem>;

declare interface EntityStructureConverter {
  listToList: (list: EntityItemList) => EntityItemList;
  listToListMap: (list: EntityItemList) => EntityItemListMap;
  listToTreeList: (list: EntityItemList) => EntityItemTreeList;
  listToTreeListMap: (list: EntityItemList) => EntityItemTreeListMap;

  treeListToList: (treeList: EntityItemTreeList) => EntityItemList;
  treeListToListMap: (treeList: EntityItemTreeList) => EntityItemListMap;
  treeListToTreeList: (treeList: EntityItemTreeList) => EntityItemTreeList;
  treeListToTreeListMap: (treeList: EntityItemTreeList) => EntityItemTreeListMap;

  listMapToList: (listMap: EntityItemListMap) => EntityItemList;
  listMapToListMap: (listMap: EntityItemListMap) => EntityItemListMap;
  listMapToTreeList: (listMap: EntityItemListMap) => EntityItemTreeList;
  listMapToTreeListMap: (listMap: EntityItemListMap) => EntityItemTreeListMap;

  treeListMapToList: (treeListMap: EntityItemTreeListMap) => EntityItemList;
  treeListMapToListMap: (treeListMap: EntityItemTreeListMap) => EntityItemListMap;
  treeListMapToTreeList: (treeListMap: EntityItemTreeListMap) => EntityItemTreeList;
  treeListMapToTreeListMap: (treeListMap: EntityItemTreeListMap) => EntityItemTreeListMap;
}

export const treeConverter: EntityStructureConverter = {
  listToList(list: EntityItemList): EntityItemList {
    const result: EntityItemList = [];
    // ! 修复数据完整性
    const treeList = treeConverter.listToTreeList(list);
    const listNew = treeConverter.treeListToList(treeList);
    listNew.forEach(item => result.push(item));
    return JSON.parse(JSON.stringify(result));
  },
  listToListMap(list: EntityItemList): EntityItemListMap {
    const result: EntityItemListMap = {};
    list.forEach(item => {
      const { id } = item;
      result[id] = item;
    });
    return JSON.parse(JSON.stringify(result));
  },
  listToTreeList(list: EntityItemList): EntityItemTreeList {
    const result: EntityItemTreeList = [];
    const listMap = treeConverter.listToListMap(list);
    const resultIdList: string[] = [];

    list.forEach(item => {
      const { parentId, id } = item;
      if (!id) return;

      if (!parentId) {
        resultIdList.push(id);
        return;
      }

      if (!listMap[parentId]) {
        resultIdList.push(id);
        return;
      }

      if (!isArray(listMap[parentId].children)) {
        listMap[parentId].children = [];
        (listMap[parentId].children as EntityItem[])?.push(listMap[id]);
        return;
      }

      if (isArray(listMap[parentId].children)) {
        (listMap[parentId].children as EntityItem[])?.push(listMap[id]);
        return;
      }
    });

    resultIdList.forEach(id => result.push(listMap[id]));

    return JSON.parse(JSON.stringify(result));
  },
  listToTreeListMap(list: EntityItemList): EntityItemTreeListMap {
    const result: EntityItemTreeListMap = {};
    const listMap = treeConverter.listToListMap(list);
    const resultIdList: string[] = [];

    list.forEach(item => {
      const { parentId, id } = item;
      if (!id) return;

      if (!parentId) {
        resultIdList.push(id);
        return;
      }

      if (!listMap[parentId]) {
        resultIdList.push(id);
        return;
      }

      if (!isObject(listMap[parentId].children)) {
        listMap[parentId].children = {};
        (listMap[parentId].children as Record<string, EntityItem>)[id] = listMap[id];
        return;
      }

      if (isObject(listMap[parentId].children)) {
        (listMap[parentId].children as Record<string, EntityItem>)[id] = listMap[id];
        return;
      }
    });

    resultIdList.forEach(id => (result[id] = listMap[id]));

    return JSON.parse(JSON.stringify(result));
  },

  treeListToList(treeList: EntityItemTreeList): EntityItemList {
    const result: EntityItemList = [];

    const repeat = (item: EntityItem) => {
      const { children } = item;
      if (isArray(children)) {
        children.forEach(repeat);
      }
      result.push(item);
    };

    treeList.forEach(repeat);

    return JSON.parse(JSON.stringify(result));
  },

  treeListToListMap(treeList: EntityItemTreeList): EntityItemListMap {
    const result: EntityItemListMap = {};

    const repeat = (item: EntityItem) => {
      const { children, id } = item;
      if (isArray(children)) {
        children.forEach(repeat);
      }
      result[id] = item;
    };

    treeList.forEach(repeat);

    return JSON.parse(JSON.stringify(result));
  },

  treeListToTreeList(treeList: EntityItemTreeList): EntityItemTreeList {
    const result = treeList;
    return JSON.parse(JSON.stringify(result));
  },

  treeListToTreeListMap(treeList: EntityItemTreeList): EntityItemTreeListMap {
    const result: EntityItemTreeListMap = {};
    const listMap: EntityItemListMap = treeConverter.treeListToListMap(treeList);
    const list: EntityItemList = treeConverter.treeListToList(treeList);
    const resultNotIdList: string[] = [];

    list.forEach(item => {
      const { id, parentId } = item;
      if (!id) return;
      if (!parentId) return;
      if (!listMap[parentId]) return;

      if (!isObject(listMap[parentId].children)) {
        listMap[parentId].children = {};
        (listMap[parentId].children as Record<string, EntityItem>)[id] = item;
        resultNotIdList.push(id);
      } else if (isObject(listMap[parentId].children)) {
        (listMap[parentId].children as Record<string, EntityItem>)[id] = item;
        resultNotIdList.push(id);
      }
    });

    resultNotIdList.forEach(id => delete listMap[id]);
    Object.assign(result, listMap);

    return JSON.parse(JSON.stringify(result));
  },

  listMapToList(listMap: EntityItemListMap): EntityItemList {
    const result: EntityItemList = [];
    Object.entries(listMap).forEach(([, item]) => result.push(item));
    return JSON.parse(JSON.stringify(result));
  },

  listMapToListMap(listMap: EntityItemListMap): EntityItemListMap {
    const result: EntityItemListMap = {};
    const list = treeConverter.listMapToList(listMap);
    const listNew = treeConverter.listToList(list);
    const listMapNew = treeConverter.listToListMap(listNew);
    Object.assign(result, listMapNew);
    return JSON.parse(JSON.stringify(result));
  },

  listMapToTreeList(listMap: EntityItemListMap): EntityItemTreeList {
    const result: EntityItemTreeList = [];
    const list = treeConverter.listMapToList(listMap);
    const treeList = treeConverter.listToTreeList(list);
    treeList.forEach(item => result.push(item));
    return JSON.parse(JSON.stringify(result));
  },

  listMapToTreeListMap(listMap: EntityItemListMap): EntityItemTreeListMap {
    const result: EntityItemTreeListMap = {};
    const list = treeConverter.listMapToList(listMap);
    const treeListMap = treeConverter.listToTreeListMap(list);
    Object.assign(result, treeListMap);
    return JSON.parse(JSON.stringify(result));
  },

  treeListMapToList(treeListMap: EntityItemTreeListMap): EntityItemList {
    const result: EntityItemList = [];
    const listMap = treeConverter.treeListMapToListMap(treeListMap);
    const list = treeConverter.listMapToList(listMap);
    list.forEach(item => result.push(item));
    return JSON.parse(JSON.stringify(result));
  },
  treeListMapToListMap(treeListMap: EntityItemTreeListMap): EntityItemListMap {
    const result: EntityItemListMap = {};

    const repeat = ([, item]) => {
      const { id, children } = item;

      if (!id) return;
      if (isObject(children)) {
        Object.entries(children).forEach(repeat);
      }
      result[id] = item;
    };
    Object.entries(treeListMap).forEach(repeat);

    return JSON.parse(JSON.stringify(result));
  },
  treeListMapToTreeList(treeListMap: EntityItemTreeListMap): EntityItemTreeList {
    const result: EntityItemTreeList = [];
    const listMap = treeConverter.treeListMapToListMap(treeListMap);
    const treeList = treeConverter.listMapToTreeList(listMap);

    treeList.forEach(item => {
      result.push(item);
    });

    return JSON.parse(JSON.stringify(result));
  },
  treeListMapToTreeListMap(treeListMap: EntityItemTreeListMap): EntityItemTreeListMap {
    const result = treeListMap;
    return JSON.parse(JSON.stringify(result));
  },
};
