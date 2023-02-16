import { createI18n } from 'vue-i18n';

import enUS from './modules/common/en-US';
import jaJP from './modules/common/ja-JP';
import zhCN from './modules/common/zh-CN';

type MessageSchema = typeof zhCN;

export const i18n = createI18n<[MessageSchema, any, any], 'zh-CN' | 'en-US' | 'ja-JP'>({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ja-JP': jaJP,
  },
});
