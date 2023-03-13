import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import {
  ArcoResolver,
  AntDesignVueResolver,
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './types/unplugin-auto-import.d.ts',
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        ArcoResolver(),
      ],
    }),
    // Doc: https://www.npmjs.com/package/unplugin-vue-components
    Components({
      dts: './types/unplugin-vue-components.d.ts',
      globs: ['./src/components/*/index.vue'],
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      directoryAsNamespace: false,
      globalNamespaces: [],
      directives: true,
      importPathTransform: v => v,
      allowOverrides: false,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
      ],
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
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\//, '/'),
      },
    },
  },
});
