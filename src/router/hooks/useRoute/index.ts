import type { RouteRecordRaw } from 'vue-router';

export const useRoute = ({ raw }) => {
  const toRouteWithScopeRoot = ({ raw }) => {
    let result: any[] = [];
    raw.forEach(item => {
      const { scope } = item;
      if (!result.find(item => item.scope === scope)) result.push({ scope });
    });

    result = result.map(item => {
      const { scope } = item;

      const children = toRoute({ raw: raw.filter(item => item.scope === scope) });
      return {
        name: [`@${scope}`, 'ROUTE'].join('.'),
        component: () => import(`../../../views/${scope}/index.vue`),
        path: `/@${scope}`,
        children,
        meta: {
          label: [`@${scope}`, 'ROUTE'].join('.'),
          data: item,
        },
      };
    });

    return result;
  };

  const toRoute = ({ raw }) => {
    return raw.map(item => {
      const { id, code, scope, component } = item;
      // import 中 无法解析之中的 `/` , 所以必须先分开来
      const [component01, component02] = component.split('/');

      return {
        name: [`@${scope}`, 'ROUTE', code].join('.'),
        component: () => import(`../../../views/${scope}/pages/${component01}/${component02}/index.vue`),
        path: `/@${scope}/${code}`,
        meta: {
          id,
          scope,
          code,
          label: [`@${scope}`, 'ROUTE', code].join('.'),
          data: item,
        },
      };
    });
  };

  const routeWithScopeRoot: RouteRecordRaw[] = toRouteWithScopeRoot({ raw });

  return {
    toRouteWithScopeRoot,

    routeWithScopeRoot,
  };
};
