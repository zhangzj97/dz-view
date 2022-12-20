import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      imports: ['vue', 'vue-i18n'],
      resolvers: [],
    }),
    // Doc: https://www.npmjs.com/package/unplugin-vue-components
    Components({
      dts: './types/auto-imports-components.d.ts',
      dirs: ['./src/components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [ArcoResolver()],
      directoryAsNamespace: true,
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
    },
  },
});
