/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{tsx,js,jsx,ts}'],
  theme: { 
    
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: [
    "valentine",

  ]
}
