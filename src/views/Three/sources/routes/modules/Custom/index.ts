import { config } from '../../../../config';

const scopeKey = config.ViewName;

export default [
  {
    name: scopeKey,
    path: `/@${scopeKey}`,
    component: () => import('../../../../index.vue'),
    children: [],
  },
];
