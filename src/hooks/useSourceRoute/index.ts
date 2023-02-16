import type { RouteRecordRaw } from 'vue-router';

import SourceRoute from '@/sources/routes';

export const useSourceRoute = () => {
  const SourceRouteList = Object.values(SourceRoute).reduce((previousValue: any[], currentValue: any) => {
    previousValue.push(...Object.values(currentValue));
    return previousValue;
  }, []);

  return {
    SourceRoute,
    SourceRouteList,
  };
};

export const useSourceRouteTool = ({ raw }) => {
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
        component: () => import(`../../views/${scope}/index.vue`),
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

  // const toMenu = ({ raw }) => {
  //   return raw.map(item => {
  //     const { id, code, name, scope, path, redirect, component, url, icon, target, parentCode, parentId } = item;
  //     return {
  //       name: name || [`@${scope}`, 'ROUTE', code].join('.'),
  //       path,
  //       redirect,
  //       component,
  //       meta: {
  //         id,
  //         scope,
  //         code,
  //         label: [`@${scope}`, 'ROUTE', code].join('.'),
  //         target,
  //         url,
  //         icon,
  //         parentCode,
  //         parentId,
  //         data: item,
  //       },
  //     };
  //   });
  // };

  // const toTreeIndexMapByCode = ({ raw }) => {
  //   const result = {};
  //   raw.forEach(item => {
  //     const { code, parentCode } = item;
  //     if (!result[parentCode]) result[parentCode] = [];
  //     result[parentCode].push(code);
  //   });
  // };

  const toRoute = ({ raw }) => {
    return raw.map(item => {
      const { id, code, scope, component } = item;
      // import 中 无法解析之中的 `/` , 所以必须先分开来
      const [component01, component02] = component.split('/');

      return {
        name: [`@${scope}`, 'ROUTE', code].join('.'),
        component: () => import(`../../views/${scope}/pages/${component01}/${component02}/index.vue`),
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
