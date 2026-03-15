/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#FCF9F2',
        'bg-alt': '#FFFFFF',
        'primary': '#D05A45',
        'text-dark': '#8C7D70',
      },
      fontFamily: {
        'cursive': ['Caveat', 'cursive'],
        'cursive-bold': ['Caveat Brush', 'cursive'],
        'display': ['Caveat Brush', 'cursive'],
        'display-alt': ['Caveat', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
