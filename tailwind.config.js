/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./_includes/**/*.njk'],

  theme: {
    fontFamily: {
      'display': ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      'body': ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      'mono': ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
