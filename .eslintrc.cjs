/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
  rules: {
    semi: 'off',
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
    'no-empty-function': [1],
    '@typescript-eslint/no-empty-function': [1],
    'no-undef': [0],
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
