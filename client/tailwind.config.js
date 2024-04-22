/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
  
  theme: {
    extend: {
    colors: {      
      'eden': {
        '50': '#eefbf6',
        '100': '#d5f6e8',
        '200': '#afebd4',
        '300': '#7bdabc',
        '400': '#45c29f',
        '500': '#22a787',
        '600': '#14876d',
        '700': '#106c5a',
        '800': '#115f50',
        '900': '#0e463c',
        '950': '#062823',
    },
    },
  }
   
  },
  plugins: [],
}

