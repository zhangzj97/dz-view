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
  absolute?: 'top' | 'bottom' | 'left' | 'right' | 'tl' | 'tr' | 'bl' | 'br' | string;
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
  test?: boolean;
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
export type DzViewTextComponentProps = DzViewBaseProps & DzViewTextProps & DzViewCursorProps & DzViewAssetProps;

/**
 * DzView VIcon 组件 Props
 */
export type DzViewIconComponentProps = DzViewBaseProps & DzViewCursorProps & DzViewAssetProps;

/**
 * DzBtn 组件 Props
 */
export type DzBtnComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzCard 组件 Props
 */
export type DzCardComponentProps = DzViewBaseProps & DzViewFlexProps & DzEntityBase;

/**
 * Dz Pop 组件 Props Interface
 */
export type DzPopPayload = {
  visible?: boolean;
  fullscreen?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';

  tooltip?: string;
  confirm?: string;
  trigger?: 'hover' | 'click' | 'focus' | 'contextMenu';
};
export type DzPopProps = DzViewBaseProps &
  DzEntityBase & {
    code?: string;
    payload?: DzPopPayload;
  };
export type DzPopEmits = {
  'update:payload': [code?: string, payload?: DzPopPayload];
  'update:value': [code?: string, value?: unknown];
};

/**
 * DzDrawer 组件 Props
 */
export type DzDrawerPayload = {
  visible?: boolean;
  fullscreen?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
};
export type DzDrawerProps = DzViewBaseProps & {
  code?: string;
  payload?: DzDrawerPayload;
};

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
export type DzTableComponentProps = DzViewBaseProps & DzEntityBase;

/**
 * DzFromItem 组件 Props
 * @deprecated
 */
export type DzFromItemComponentProps = DzViewBaseProps;

/**
 * DzControl 组件 Props
 */
export type DzControlComponentProps = DzViewBaseProps;

/**
 * Control 组件 Props
 */
export type ControlProps<T = {}> = {
  code: string;
  state: DzViewStateProps;
  option: T;
  value?: any;
};

export type ControlEmits = {
  'update:value': [value: any];
  'update:state': [value: any];
  'update:option': [value: any];
  beforeInput: [];
  afterInput: [];
  beforeFocus: [];
  afterFocus: [];
  beforeBlur: [];
  afterBlur: [];
};
