import { config } from '../../../../config';

const scopeKey = config.ViewName;

export default [
  {
    code: scopeKey,
    path: `/@${scopeKey}`,
    component: () => import('../../../../index.vue'),
    children: [],
  },
];
