/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '530': "530px"
      },
      colors:{
        'bgPrimary': "#000000"
      }
    },
  },
  plugins: [],
}
