

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue':{
        'dark':'#050A30',
        'navy':'#000C66',
        'default':'#0000FF',
        'baby':'#7EC8E3',
      },
      'white':'#FAFBF4',
      'purple':'#9747FF',
      'inherit':'inhrit',
    },
    
    extend: {
      fontFamily:{
        custom: ['Ubuntu','sans-serif']
      }
    },
  },
  plugins: [
    require("./src/theme/planet.theme.js"),
    plugin(function({addBase,theme}){
      addBase({
        '#app':{
          "@apply min-h-screen w-full px-10 py-3":{},
          "@apply font-custom":{},
            "@apply bg-[url('./src/assets/dots.svg')] bg-no-repeat bg-cover":{},
        }
      })
    })
  ],
}
