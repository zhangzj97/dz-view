import PaneSearch from '../components/PaneSearch/index.vue';
import PaneSetting from '../components/PaneSetting/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneSearch },
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneSetting },
  ],
};
