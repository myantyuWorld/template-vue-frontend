/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: [],
  // 全てのファイルで、tailwind.cssを使用できるようにする
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "'Righteous'",
        "'Hiragino Maru Gothic Pro'",
        "'ヒラギノ角ゴ Pro W3'",
        "'メイリオ'",
        "'Meiryo'",
        "'MS Pゴシック'",
      ],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    flexGrow: {
      default: 1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
    },

    extend: {
      colors: {
        'font-color': '#ececec',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};