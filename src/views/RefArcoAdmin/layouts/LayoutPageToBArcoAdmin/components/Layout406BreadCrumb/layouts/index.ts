import PaneBack from '../components/PaneBack/index.vue';
import PaneTitle from '../components/PaneTitle/index.vue';
import PaneBreadCrumb from '../components/PaneBreadCrumb/index.vue';
import PaneToolBar from '../components/PaneToolBar/index.vue';

export const layoutData = {
  option: { layout: 'row', size: 'h-grow' },
  children: [
    { option: { layout: 'one', size: 'w-8' }, component: () => PaneBack },
    { option: { layout: 'one', size: 'w-fit' }, component: () => PaneBreadCrumb },
    { option: { layout: 'one', size: 'w-grow' }, component: () => PaneTitle },
    { option: { layout: 'one', size: 'w-fit' }, component: () => PaneToolBar },
  ],
};
