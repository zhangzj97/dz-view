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
 * DzView [Experimental] 试验性模块
 */
interface DzViewExperimentalProps {
  v?: 'mouse-gray';
}

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

export type DzViewComponentProps = DzViewBaseProps &
  DzViewTextProps &
  DzViewFlexProps &
  DzViewPositionProps &
  DzViewCursorProps &
  DzViewExperimentalProps;
