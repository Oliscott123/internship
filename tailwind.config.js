/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wheat: 'rgb(245, 222, 179)',
        white: 'rgb(255, 255, 255)',
        lightBlue: 'rgb(69, 184, 210)',
        hoverBlue: '#4571a0',
        bgColor: 'rgb(73, 101, 103)'
      }
    },
  },
  plugins: [],
}

