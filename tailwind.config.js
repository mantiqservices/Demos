/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mantiq: {
          cyan: '#38bdf8',
          navy: '#001e3c',
          navyLight: '#002b55',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
