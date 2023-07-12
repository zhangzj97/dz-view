/**
 * DzEntity [Base] 基础数据模块
 */
export interface DzEntityBase {
  id?: string;
  code?: string;
  icon?: string;
  avatar?: string;
  title?: string;
  bg?: string;
  version?: string;
}
/**
 * DzEntity [Tree] 树形数据模块
 */
export interface DzEntityTree {
  id?: string;
  code?: string;
  parentId?: string;
  children?: any[];
  level?: string;
  idPath?: string;
  version?: string;
}

/**
 * 常用组件 Props
 */
declare global {
  type DzEntityBaseComponentProps = DzEntityBase;
}
