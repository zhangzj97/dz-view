/**
 * DzView [Base] 基础样式模块
 *
 *  s    : 尺寸
 *  w    : 最值尺寸, 媒体查询尺寸, overflow, gap
 *  t    : 文本样式
 *  trans: 过渡 动画
 */
interface DzViewBaseProps {
  s?: string;
  w?: string;
  t?: string;
  trans?: boolean | string;
}

/**
 * DzView [Text] 文本模块
 */
interface DzViewTextProps {
  text?: string;
}

/**
 * DzView [Flex] Flex布局 模块
 */
interface DzViewFlexProps {
  row?: boolean;
  col?: boolean;
  grid?: boolean;
}

/**
 * DzView [Position] 定位模块
 */
interface DzViewPositionProps {
  absolute?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br'
    | string;
  fixed?: string;
}

/**
 * DzView [Cursor] 光标模块
 */
interface DzViewCursorProps {
  pointer?: boolean;
}

/**
 * DzView [Asset] 资源模块
 */
interface DzViewAssetProps {
  icon?: string;
  src?: string;
}

/**
 * DzView [Experimental] VView 试验性模块
 */
interface DzViewViewExperimentalProps {
  v?: 'mouse-gray';
}

/**
 * DzView [Experimental] VIcon 试验性模块
 */
interface DzViewIconExperimentalProps {
  v?:
    | '4-0'
    | '4-25'
    | '4-50'
    | '4-75'
    | '4-90'
    | '4-95'
    | '4-100'
    | '6-0'
    | '6-25'
    | '6-50'
    | '6-75'
    | '6-90'
    | '6-95'
    | '6-100'
    | '8-0'
    | '8-25'
    | '8-50'
    | '8-75'
    | '8-90'
    | '8-95'
    | '8-100'
    | '10-0'
    | '10-25'
    | '10-50'
    | '10-75'
    | '10-90'
    | '10-95'
    | '10-100'
    | '12-0'
    | '12-25'
    | '12-50'
    | '12-75'
    | '12-90'
    | '12-95'
    | '12-100'
    | '16-0'
    | '16-25'
    | '16-50'
    | '16-75'
    | '16-90'
    | '16-95'
    | '16-100'
    | '20-0'
    | '20-25'
    | '20-50'
    | '20-75'
    | '20-90'
    | '20-95'
    | '20-100'
    | '24-0'
    | '24-25'
    | '24-50'
    | '24-75'
    | '24-90'
    | '24-95'
    | '24-100'
    | '32-0'
    | '32-25'
    | '32-50'
    | '32-75'
    | '32-90'
    | '32-95'
    | '32-100';
}

/**
 * DzView V 组件 Props
 */
export type DzViewViewComponentProps = DzViewBaseProps &
  DzViewTextProps &
  DzViewFlexProps &
  DzViewPositionProps &
  DzViewCursorProps &
  DzViewAssetProps &
  DzViewViewExperimentalProps;

/**
 * DzView VSpace 组件 Props
 */
export type DzViewSpaceComponentProps = DzViewBaseProps &
  DzViewPositionProps &
  DzViewAssetProps;

/**
 * DzView VText 组件 Props
 */
export type DzViewTextComponentProps = DzViewBaseProps &
  DzViewTextProps &
  DzViewPositionProps &
  DzViewCursorProps &
  DzViewAssetProps;

/**
 * DzView VIcon 组件 Props
 */
export type DzViewIconComponentProps = DzViewBaseProps &
  DzViewPositionProps &
  DzViewCursorProps &
  DzViewAssetProps &
  DzViewIconExperimentalProps;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * DzEntity [Base] 基础数据模块
 */
export interface DzEntityBaseProps {
  id?: string;
  icon?: string;
  avatar?: string;
  title?: string;
  bg?: string;
}
/**
 * DzEntity [Tree] 树形数据模块
 */
export interface DzEntityTreeProps {
  id?: string;
  parentId?: string;
  children?: any[];
  idPath?: string;
  level?: string;
}
