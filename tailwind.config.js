/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-p': '#aec600',
        'black-p': '#17181c',
      },
    },
   
      
   
  },
  plugins: [require("daisyui")],
}

