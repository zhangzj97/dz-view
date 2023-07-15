/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      scale: {
        25: '25%',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shakeX: {
          'from, to': {
            transform: 'translate3d(0, 0, 0)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translate3d(-10px, 0, 0)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translate3d(10px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
