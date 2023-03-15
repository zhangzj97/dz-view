import PaneLogo from '../components/PaneLogo/index.vue';
import PaneMenu from '../components/PaneMenu/index.vue';
import PaneMenuTool from '../components/PaneMenuTool/index.vue';

export const layoutData = {
  option: { layout: 'col', size: 'h-grow' },
  children: [
    // { option: { layout: 'one', size: 'h-16' }, component: () => PaneLogo },
    {
      option: { layout: 'col', size: 'h-grow' },
      children: [
        {
          option: {
            layout: 'one',
            size: 'h-grow',
            class: 'h-0',
            overflow: 'auto',
          },
          component: () => PaneMenu,
        },
        // { option: { layout: 'one', size: 'h-fit w-16', overflow: 'auto' }, component: () => PaneMenuTool },
      ],
    },
  ],
};
