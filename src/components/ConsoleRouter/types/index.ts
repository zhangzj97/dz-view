import type { RouteRecordRaw } from 'vue-router';

export interface Option {
  // `id` is unique
  id: string | number;

  // `label` is text for `id`
  label?: /*`label` is text for `id`*/ string;

  // `code` is meaningful
  code?: string;

  // `title` is lognger than `label`
  title?: string;

  // `disabled` is readonly status
  disabled?: boolean;

  // `extra` is extend data
  extra?: Record<string, unknown>;
}

export interface RouteOption extends Option {
  extra: {
    // `route` is route info
    route: RouteRecordRaw;
  };
}

export interface SearchModel {
  keyword: string;
}
