import Layout200NoticeBar from '../components/Layout200NoticeBar/index.vue';
import Layout300AppNavBar from '../components/Layout300AppNavBar/index.vue';
import Layout301AppNavBar from '../components/Layout301AppNavBar/index.vue';
import Layout401FloatLeft from '../components/Layout401FloatLeft/index.vue';
import Layout402FloatRight from '../components/Layout402FloatRight/index.vue';
import Layout403SlimLeft from '../components/Layout403SlimLeft/index.vue';
import Layout404Left from '../components/Layout404Left/index.vue';
import Layout405AppNavBar from '../components/Layout405AppNavBar/index.vue';
import Layout406BreadCrumb from '../components/Layout406BreadCrumb/index.vue';
import Layout407RouteTag from '../components/Layout407RouteTag/index.vue';
import Layout500FooterBar from '../components/Layout500FooterBar/index.vue';

export const layoutData = {
  option: { layout: 'col', size: 'w-screen h-screen', overflow: 'hidden' },
  children: [
    // 通知栏
    {
      option: { layout: 'one', size: 'h-fit' },
      component: () => Layout200NoticeBar,
    },
    // 应用 Navbar
    // { option: { layout: 'one', size: 'h-16' }, component: () => Layout300AppNavBar },
    // 粘性应用 Navbar
    // TODO
    // {
    //   option: { layout: 'row', size: 'h-16', fixed: true, position: 'top-0 left-0' },
    //   component: () => Layout301AppNavBar,
    //   children: [
    //     { option: { layout: 'one', size: 'w-64' }, component: () => 'PaneLogo' },
    //     { option: { layout: 'one', size: 'w-grow' }, component: () => 'PaneAppNav' },
    //     { option: { layout: 'one', size: 'w-64' }, component: () => 'PaneSearch' },
    //     { option: { layout: 'one', size: 'w-64' }, component: () => 'PaneToolBar' },
    //     { option: { layout: 'one', size: 'w-16' }, component: () => 'PaneAvatar' },
    //   ],
    // },
    // 主体
    {
      option: { layout: 'row', size: 'h-grow' },
      children: [
        // {
        //   option: { layout: 'one', size: 'w-16', overflow: 'auto' },
        //   component: () => Layout403SlimLeft,
        // },
        {
          option: { layout: 'one', size: 'w-fit', shadow: 'shadow-sm' },
          component: () => Layout404Left,
        },
        {
          option: { layout: 'col', size: 'w-grow' },
          children: [
            // {
            //   option: { layout: 'one', size: 'h-16', shadow: 'shadow-sm' },
            //   component: () => Layout405AppNavBar,
            // },
            {
              option: { layout: 'one', size: 'h-12', shadow: 'shadow-sm' },
              component: () => Layout406BreadCrumb,
            },
            {
              option: { layout: 'one', size: 'h-8', shadow: 'shadow-sm' },
              component: () => Layout407RouteTag,
            },
            {
              option: {
                layout: 'one',
                size: 'h-grow',
                class: 'h-0',
                overflow: 'auto',
              },
              slot: 'default',
            },
          ],
        },

        // TODO
        // {
        //   option: { layout: 'one', size: 'w-64', absolute: true, position: 'top-0 left-0 bottom-0' },
        //   component: () => Layout401FloatLeft,
        //   children: [{ option: { layout: 'one', size: 'w-grow' }, component: () => 'PaneMain' }],
        // },
        // {
        //   option: { layout: 'one', size: 'w-64', absolute: true, position: 'top-0 right-0 bottom-0' },
        //   component: () => Layout402FloatRight,
        //   children: [{ option: { layout: 'one', size: 'w-grow' }, component: () => 'PaneMain' }],
        // },
      ],
    },
    // 足部信息
    // { option: { layout: 'one', size: 'h-16' }, component: () => Layout500FooterBar },
  ],
};
