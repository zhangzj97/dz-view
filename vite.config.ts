import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './types/unplugin-auto-import.d.ts',
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      resolvers: [],
      dirs: ['./src/hooks/*', './src/services/*'],
    }),
    // Doc: https://www.npmjs.com/package/unplugin-vue-components
    Components({
      dts: './types/unplugin-vue-components.d.ts',
      globs: ['./src/components/*/index.vue', './src/components/V/*/index.vue', './src/components/Popup/*/index.vue'],
      resolvers: [],
      directoryAsNamespace: false,
      globalNamespaces: [],
      directives: true,
      importPathTransform: v => v,
      allowOverrides: false,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:32906',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\//, '/'),
      },
    },
  },
});
