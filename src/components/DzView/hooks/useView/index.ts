import { isString } from '@vueuse/core';

export const useView = ({ props }) => {
  // Css Order
  // 01. Display    flex | block
  // 02. Position   relative | absolute | fixed
  // 03. Flex       [FlexDirction | FlexWrap]
  // 04. FlexAlign
  // 05. Size
  // 06. ZIndex
  // 11. Cursor

  // View
  const viewDisplayCSS = () => {
    const { block, flex } = props;
    if (block) return 'block';
    else if (flex) return 'flex';
    else return 'flex';
  };
  const viewPositionCSS = () => {
    const { relative, absolute, fixed } = props;
    if (relative) return 'relative';
    else if (absolute) return 'absolute';
    else if (fixed) return 'fixed';
    else return 'relative';
  };
  const viewFlexCSS = () => 'flex-row flex-nowrap';
  const viewFlexAlign = () => '';
  const viewSizeWidthCSS = () => {
    const { size } = props;
    if (!size) return 'w-auto';
    else return size.match(/w-[^\s].*/)?.[0] || 'w-auto';
  };
  const viewSizeHeightCSS = () => {
    const { size } = props;
    if (!size) return 'w-auto';
    else return size.match(/h-[^\s].*/)?.[0] || 'h-auto';
  };
  const viewCursorCSS = () => {
    const { pointer } = props;
    if (pointer) return 'cursor-pointer';
    else return '';
  };
  const viewShadowCSS = () => {};
  const viewTransitionCSS = () => {
    const { transition } = props;
    if (transition) return 'transition-all';
    else return '';
  };

  // Wrap
  const wrapDisplayCSS = () => 'flex';
  const wrapPositionCSS = () => 'relative';
  const wrapFlexCSS = () => {
    const { one, col, row, grid } = props;
    if (one) return 'flex-col flex-nowrap';
    else if (col) return 'flex-col flex-nowrap';
    else if (row) return 'flex-row flex-nowrap';
    else if (grid) return 'flex-row flex-wrap';
    else return 'flex-col flex-nowrap';
  };
  const wrapFlexAlign = () => '';
  const wrapSizeWidthCSS = () => 'w-auto';
  const wrapSizeHeightCSS = () => 'h-auto';
  const wrapShadowCSS = () => '';
  const wrapCursorCSS = () => '';
  const wrapTransitionCSS = () => {
    const { transition } = props;
    if (transition) return 'transition-all';
    else return '';
  };
  const wrapOtherCSS = () => {
    const { wrapClass } = props;
    if (isString(wrapClass)) return wrapClass;
    else if (Array.isArray(wrapClass)) return wrapClass.join(' ');
    else return '';
  };

  return {
    viewDisplayCSS,
    viewPositionCSS,
    viewFlexCSS,
    viewFlexAlign,
    viewSizeWidthCSS,
    viewSizeHeightCSS,
    viewShadowCSS,
    viewCursorCSS,
    viewTransitionCSS,

    wrapDisplayCSS,
    wrapPositionCSS,
    wrapFlexCSS,
    wrapFlexAlign,
    wrapSizeWidthCSS,
    wrapSizeHeightCSS,
    wrapShadowCSS,
    wrapCursorCSS,
    wrapTransitionCSS,

    wrapOtherCSS,
  };
};
