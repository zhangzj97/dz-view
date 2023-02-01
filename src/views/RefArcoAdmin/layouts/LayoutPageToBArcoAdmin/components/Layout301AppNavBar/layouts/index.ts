import PaneLogo from '../components/PaneLogo/index.vue';
import PaneAppNav from '../components/PaneAppNav/index.vue';
import PaneSearch from '../components/PaneSearch/index.vue';
import PaneToolBar from '../components/PaneToolBar/index.vue';
import PaneAvatar from '../components/PaneAvatar/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    { option: { layout: 'one', size: 'w-64' }, component: () => PaneLogo },
    { option: { layout: 'one', size: 'w-grow' }, component: () => PaneAppNav },
    { option: { layout: 'one', size: 'w-64' }, component: () => PaneSearch },
    { option: { layout: 'one', size: 'w-64' }, component: () => PaneToolBar },
    { option: { layout: 'one', size: 'w-16' }, component: () => PaneAvatar },
  ],
};
