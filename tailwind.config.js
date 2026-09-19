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
        'primary': '#d05243',
        'primary-hover': '#ba4335',
        'secondary': '#faeed6',
        'contrast': '#fffdfb', 
        'text-dark': '#8C7D70',
      },
      fontFamily: {
        'cursive': ['Caveat', 'cursive'],
        'cursive-bold': ['Caveat Brush', 'cursive'],
        'display': ['Caveat Brush', 'cursive'],
        'display-alt': ['Caveat', 'cursive'],
        'body': ['Inter', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
        'anton': ['"Anton"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
