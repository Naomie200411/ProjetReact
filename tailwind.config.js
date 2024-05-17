/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'clashDisplay': ['Clash Display', 'sans-serif'],
      'epilogue': ['Epilogue', 'sans-serif'],
    },

    // fontWeights: {
    //   'semibold': 600,
    // },

    colors: {
      'primary':'#4640DE',
      'title':'#25324B',
      'light':'#7C8493',
      'white': '#FFFFFF',
      'black': '#000000',
      'stroke': '#D6DDEB',
      'yellow': '#FFB836',
      'green': '#56CDAD',
      'red': '#FF6550',
      'primarylight': 'rgba(70, 64, 222, 0.1)', 
      'redlight': 'rgba(70, 64, 222, 0.1)',
      'yellowlight': 'rgba(255, 101, 80, 0.1)',
      'greenlight': 'rgba(86, 205, 173, 0.1)',
      'greensecondary':'#56CDAD',

    },

    
  },
  plugins: [],
}