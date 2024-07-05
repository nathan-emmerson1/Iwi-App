/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/components/**/*.{js,jsx,ts,tsx}'],
  theme: { 
    
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: [
    "valentine",

  ]
}
