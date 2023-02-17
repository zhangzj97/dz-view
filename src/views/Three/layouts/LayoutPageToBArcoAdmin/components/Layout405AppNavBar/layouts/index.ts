import PaneLogo from '../components/PaneLogo/index.vue';
import PaneAppNav from '../components/PaneAppNav/index.vue';
import PaneToolBar from '../components/PaneToolBar/index.vue';
import PaneAvatar from '../components/PaneAvatar/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow', shadow: 'shadow-sm' },
  children: [
    { option: { layout: 'one', size: 'w-fit' }, component: () => PaneLogo },
    { option: { layout: 'one', size: 'w-grow' }, component: () => PaneAppNav },
    { option: { layout: 'one', size: 'w-fit' }, component: () => PaneToolBar },
    { option: { layout: 'one', size: 'w-20' }, component: () => PaneAvatar },
  ],
};
