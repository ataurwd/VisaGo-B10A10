/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3947',
        secondary: '#F1F9FC',
        gradientFrom: '#25CBD6', 
        gradientTo: '#00EE8A',
        themeDatak: '#101E33'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #25CBD6, #00EE8A)', 
      },
    },
  },
  plugins: [require('daisyui')],
}
