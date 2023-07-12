/**
 * DzView [Base] 基础样式模块
 *
 * @ s    : 尺寸
 * @ w    : 最值尺寸, 媒体查询尺寸, overflow, gap
 * @ t    : 文本样式
 * @ trans: 过渡 动画
 */
export interface DzViewBaseProps {
  s?: string;
  w?: string;
  t?: string;
  trans?: boolean | string;
}

/**
 * DzView [Base] 基础样式模块
 *
 * @abstract   abstract   abstract
 * @access   access   access
 * @alias   alias   alias
 * @argument   argument   argument
 * @async   async   async
 * @augments   augments   augments
 * @author   author   author
 *
 * @borrows borrows borrows borrows
 *
 * @callback callback callback callback
 *
 * @class class class class
 * @classdesc classdesc classdesc classdesc
 * @constant constant constant constant
 * @constructor constructor constructor constructor
 * @copyright copyright copyright copyright
 *
 * @default default default default
 * @deprecated deprecated deprecated deprecated
 * @description description description description
 *
 * @emits emits emits emits
 * @enum enum enum enum
 * @event event event event
 * @example example example example
 * @exports exports exports exports
 * @extends extends extends extends
 * @external external external external
 *
 * @field field field field
 * @file file file file
 * @fileoverview fileoverview fileoverview fileoverview
 * @fires fires fires fires
 * @function function function function
 *
 * @generator generator generator generator
 * @global global global global
 *
 * @hideconstructor hideconstructor hideconstructor hideconstructor
 * @host host host host
 *
 * @ignore ignore ignore ignore
 * @implements implements implements implements
 * @inheritdoc inheritdoc inheritdoc inheritdoc
 * @inner inner inner inner
 * @instance instance instance instance
 * @interface interface interface interface
 *
 * @kind kind kind kind
 *
 * @lends lends lends lends
 * @license license license license
 * @link link link link
 * @linkcode linkcode linkcode linkcode
 * @linkplain linkplain linkplain linkplain
 * @listens listens listens listens
 *
 * @member member member member
 * @memberof memberof memberof memberof
 * @method method method method
 * @mixes mixes mixes mixes
 * @module module module module
 * @name name name name
 * @namespace namespace namespace namespace
 *
 * @overload overload overload overload
 * @override override override override
 * @package package package package
 * @param param param param
 * @private private private private
 * @prop prop prop prop
 * @property property property property
 * @protected protected protected protected
 * @public public public public
 *
 * @readonly readonly readonly readonly
 * @requires requires requires requires
 * @returns returns returns returns
 *
 * @satisfies satisfies satisfies satisfies
 * @see see see see
 * @since since since since
 * @static static static static
 * @summary summary summary summary
 *
 * @template template template template
 * @this this this this
 * @throws throws throws throws
 * @todo todo todo todo
 * @tutorial tutorial tutorial tutorial
 * @type type type type
 * @typedef typedef typedef typedef
 *
 * @var var var var
 *
 * @variation variation variation variation
 *
 * @version version version version
 * @virtual virtual virtual virtual
 *
 * @yields yields yields yields
 *
 *
 *  */
export interface DzViewTextProps {
  text?: string;
}

export interface DzEntityProps {
  id?: string;
  icon?: string;
  avatar?: string;
  title?: string;
  bg?: string;
}

export interface DzViewFlexProps {
  row?: boolean;
  col?: boolean;

  grid?: boolean;
}

export interface DzViewPositionProps {
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

export interface DzViewCursorProps {
  pointer?: boolean;
}

export interface DzViewSpaceProps {
  space?: boolean;
}

export interface DzViewMouseProps {
  v?: 'mouse-gray';
}
