/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'league-spartan': ['"League Spartan"', 'sans-serif'],
      },
      borderRadius: {
        'custom-top': '20px 150px 0 0', // Adjust the values as needed
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

