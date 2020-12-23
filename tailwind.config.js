const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        smblue: ' 5rem -20px #BFD8D2',
      },
      fontFamily: {
        custom1: ["Space Mono","monospace"],
        custom2: ["Langar", "cursive"],
        custom3: ["Fugaz", "cursive"],
        custom4: ["Gabriela", "serif"],
        custom5: ["Libre Baskerville", "serif"],  
        custom6: ["Cambay", "sans"],
        custom7: ["Leckerli One", "cursive"]
      },
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};

