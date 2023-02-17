import PaneSearch from '../components/PaneSearch/index.vue';
import PaneLocale from '../components/PaneLocale/index.vue';
import PaneDarkMode from '../components/PaneDarkMode/index.vue';
import PaneMessage from '../components/PaneMessage/index.vue';
import PaneFullScreen from '../components/PaneFullScreen/index.vue';
import PaneTheme from '../components/PaneTheme/index.vue';
import PaneSetting from '../components/PaneSetting/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneSearch },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneLocale },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneDarkMode },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneMessage },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneFullScreen },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneTheme },
    { option: { layout: 'one', size: 'w-12' }, component: () => PaneSetting },
  ],
};
