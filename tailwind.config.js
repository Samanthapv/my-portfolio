const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      spacing: {
        specialunderline: '4rem',
      },
        boxShadow: {
        smblue: ' 5rem -20px #BFD8D2',
      },
      lineHeight: {
        'extra-loose': '6rem',
       },
      fontFamily: {
        custom1: ["Space Mono","monospace"],
        custom2: ["Reenie Beanie", "cursive"],
        custom3: ["Fugaz", "cursive"],
        custom4: ["Gabriela", "serif"],
        custom5: ["Nunito", "sans serif"],  
        custom6: ["Cambay", "sans"],
        custom7: ["Zilla Slab Highlight", "cursive"]
       
      },
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
        yellow: {
          lightYellow: '#f0e0a2',
        },
        purple: {
          lilac: '#bfb1d5',
        },
        green: {
          lightGreen: '#5dc5cd',
        },
        pink: {
          salmon: '#fed1be',
        },
        blue: {
          light: '#abe1fd',
        }
      },

      height: {
        sm: '1250px'},
      
      backgroundImage: {
        'hero-bg': "url('/background.gif')",
        'hero-bg2': "url('/background2.gif')",        
    },


    },
  },
  variants: {},
  plugins: [],
};

