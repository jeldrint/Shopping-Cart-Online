/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [defaultTheme.fontFamily.sans],
      serif: [defaultTheme.fontFamily.serif],
      mono: [defaultTheme.fontFamily.mono],
      myFont: 'Varela Round'
    }
  },
  plugins: [],
}

