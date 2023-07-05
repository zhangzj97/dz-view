/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      scale: {
        25: '25%',
      },
    },
  },
  plugins: [],
};
