import PaneRouteTagTab from '../components/PaneRouteTagTab/index.vue';
import PaneToolbar from '../components/PaneToolbar/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    {
      option: {
        layout: 'one',
        size: 'w-grow',
        class: 'w-0',
        overflow: 'hidden',
      },
      component: () => PaneRouteTagTab,
    },
    // {
    //   option: { layout: 'one', size: 'w-fit' },
    //   component: () => PaneToolbar,
    // },
  ],
};
