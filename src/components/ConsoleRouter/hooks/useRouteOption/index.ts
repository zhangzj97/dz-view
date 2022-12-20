import { routes as routesFromRouter } from '@/router';
import type { RouteRecordRaw } from 'vue-router';

interface Option {
  // `id` is unique
  id: string | number;

  // `label` is text for `id`
  label?: /*`label` is text for `id`*/ string;

  // `code` is meaningful
  code?: string;

  // `title` is lognger than `label`
  title?: string;

  // `extra` is extend data
  extra?: unknown;
}

interface RouteOption extends Option {
  extra: {
    // `route` is route info
    route: RouteRecordRaw;
  };
}

// getRouteLeves
// Make tree route to list route
const getRouteLeves = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  const result: RouteRecordRaw[] = [];

  routes.forEach(route => {
    const { children } = route;
    if (!children) {
      // When route is route leaf
      result.push(route);
    } else if (children.length === 0) {
      // When route is route node and has no leves
    } else if (children.length === 1) {
      // When route is route node and has just one leaf
      result.push(...getRouteLeves(children));
    } else if (children.length >= 2) {
      // When route is route node and has one leaf at least
      result.push(...getRouteLeves(children));
    }
  });

  return result;
};

// getRouteOptionList
// Make list route to option list route
const getRouteOptionList = (routes: RouteRecordRaw[]): RouteOption[] => {
  const result: RouteOption[] = [];

  routes.forEach(route => {
    const { name, path, component } = route;
    const routeOption: RouteOption = { id: '', extra: { route } };

    routeOption.id = String(name) ?? path ?? Math.random();
    routeOption.label = path;
    routeOption.code = String(name);
    routeOption.title = `${String(name)} - ${path}`;

    result.push(routeOption);
  });

  return result;
};

// `routes` is raw route
const routes: RouteRecordRaw[] = routesFromRouter;
// `routeList` is leves of routes
export const routeList: RouteOption[] = getRouteOptionList(getRouteLeves(routes));
