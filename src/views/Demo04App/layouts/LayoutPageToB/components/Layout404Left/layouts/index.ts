import PaneLogo from '../components/PaneLogo/index.vue';
import PaneMenu from '../components/PaneMenu/index.vue';
import PaneMenuTool from '../components/PaneMenuTool/index.vue';

export const layoutData = [
  { option: { layout: 'one', size: 'h-16' }, component: () => PaneLogo },
  {
    option: { layout: 'one', size: 'h-grow' },
    children: [
      { option: { layout: 'one', size: 'h-16' }, component: () => PaneMenuTool },
      { option: { layout: 'one', size: 'h-grow', overflow: 'auto' }, component: () => PaneMenu },
    ],
  },
];
