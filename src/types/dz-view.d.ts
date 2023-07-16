import type { DzEntityBase } from 'types/dz-entity';

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
 * DzView State
 */
export type DzViewStateProps = {
  visible?: boolean;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullscreen?: boolean;
  error?: boolean;
};

/**
 * DzView V 组件 Props
 */
export type DzViewViewComponentProps = DzViewBaseProps &
  DzViewTextProps &
  DzViewFlexProps &
  DzViewPositionProps &
  DzViewCursorProps &
  DzViewAssetProps;

/**
 * DzView VSpace 组件 Props
 */
export type DzViewSpaceComponentProps = DzViewBaseProps & DzViewAssetProps;

/**
 * DzView VText 组件 Props
 */
export type DzViewTextComponentProps = DzViewBaseProps &
  DzViewTextProps &
  DzViewCursorProps &
  DzViewAssetProps;

/**
 * DzView VIcon 组件 Props
 */
export type DzViewIconComponentProps = DzViewBaseProps &
  DzViewCursorProps &
  DzViewAssetProps;

/**
 * DzBtn 组件 Props
 */
export type DzBtnComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzCard 组件 Props
 */
export type DzCardComponentProps = DzViewBaseProps &
  DzViewFlexProps &
  DzEntityBase;

/**
 * DzDrawer 组件 Props
 */
export type DzDrawerComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzPopover 组件 Props
 */
export type DzPopoverComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzModal 组件 Props
 */
export type DzModalComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzTable 组件 Props
 */
export type DzTableComponentProps = DzViewBaseProps;

/**
 * DzFromItem 组件 Props
 */
export type DzFromItemComponentProps = DzViewBaseProps;

/**
 * DzPluginControl 组件 Props
 */
export type DzPluginControlProps<T> = {
  state: DzViewStateProps;
  code: string;
  field: any;
  option: T;
  value?: any;
  validator?: any;
  formStyle?: any;
  data?: any;
};

export type DzPluginControlEmits = {
  'update:value': [value: string | null];
  'update:option': [value: string | null];
  beforeInput: [];
  afterInput: [];
  beforeFocus: [];
  afterFocus: [];
  beforeBlur: [];
  afterBlur: [];
};
