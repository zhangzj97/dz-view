import Layout300AppNavBar from '../components/Layout300AppNavBar/index.vue';
import Layout404Left from '../components/Layout404Left/index.vue';
import Layout405AppNavBar from '../components/Layout405AppNavBar/index.vue';
import Layout406BreadCrumb from '../components/Layout406BreadCrumb/index.vue';
import Layout407RouteTag from '../components/Layout407RouteTag/index.vue';

import Layout000Block from '../components/Layout000Block/index.vue';
import Layout000Logo from '../components/Layout000Logo/index.vue';
import Layout000ClientTag from '../components/Layout000ClientTag/index.vue';
import Layout000NoticeBar from '../components/Layout000NoticeBar/index.vue';

// lint
// 1. 当 layout 为 one 时候, size 不可以 是 w-grow
// 2. 当 layout 为 one 时候, 不可以 有 children

// prettier-ignore
export const layoutData = {
  option: { layout: 'col', size: 'w-screen h-screen', overflow: 'hidden' },
  children: [
    { option: { layout: 'one' }, component: () => Layout000NoticeBar },
    { option: { layout: 'one', size: 'h-16' }, component: () => Layout300AppNavBar },
    {
      option: { layout: 'row', size: 'h-16' },
      children: [
        { option: { layout: 'one', size: 'w-64' }, component: () => Layout000Logo },
        { option: { layout: 'one', size: 'w-grow' }, component: () => Layout000ClientTag },
        { option: { layout: 'one', size: 'w-64' }, component: () => Layout000Block },
        { option: { layout: 'one', size: 'w-64' }, component: () => Layout000Block },
      ],
    },
    // 主体
    {
      option: { layout: 'row', size: 'h-grow' },
      children: [
        { option: { layout: 'one', size: 'w-fit', shadow: 'shadow-sm' }, component: () => Layout404Left },
        {
          option: { layout: 'col', size: 'w-grow' },
          children: [
            { option: { layout: 'one', size: 'h-16', shadow: 'shadow-sm' }, component: () => Layout405AppNavBar },
            { option: { layout: 'one', size: 'h-12', shadow: 'shadow-sm' }, component: () => Layout406BreadCrumb },
            { option: { layout: 'one', size: 'h-8', shadow: 'shadow-sm' }, component: () => Layout407RouteTag },
            { option: { layout: 'one', size: 'h-grow', class: 'h-0', overflow: 'auto' }, slot: 'default' },
          ],
        },
      ],
    },
  ],
};
