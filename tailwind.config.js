/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['iranyekan']
      },
      colors:{
        primary:'#222222',
        secendary:'#F5E6E0',
      },
      backgroundImage:{
        hero:'url(./src/assets/img/bg_hero.svg)'
      }
    },
  },
  plugins: [],
}

