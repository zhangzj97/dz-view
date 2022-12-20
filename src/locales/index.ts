import { createI18n } from 'vue-i18n';

import enUS from './modules/common/en-US.json';
import jaJP from './modules/common/ja-JP.json';
import zhCN from './modules/common/zh-CN.json';

/**
 * setup vue-i18n with i18n resources with global type definition.
 * if you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 */
type MessageSchema = typeof zhCN;

export const i18n = createI18n<[MessageSchema], 'zh-CN' | 'en-US' | 'ja-JP'>({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ja-JP': jaJP,
  },
});
