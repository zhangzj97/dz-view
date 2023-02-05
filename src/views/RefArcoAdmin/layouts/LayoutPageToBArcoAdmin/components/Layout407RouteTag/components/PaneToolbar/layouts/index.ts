import PaneRefresh from '../components/PaneRefresh/index.vue';
import PaneMore from '../components/PaneMore/index.vue';
import PaneRoute from '../components/PaneRoute/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneRoute },
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneRefresh },
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneMore },
  ],
};
