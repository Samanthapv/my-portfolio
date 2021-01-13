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
        specialunderline: "4rem",
      },
      boxShadow: {
        smblue: " 5rem -20px #BFD8D2",
      },
      lineHeight: {
        "extra-loose": "6rem",
      },
      fontFamily: {
        custom1: ["Space Mono", "monospace"],
        custom2: ["Reenie Beanie", "cursive"],
        custom3: ["Fugaz", "cursive"],
        custom4: ["Gabriela", "serif"],
        custom5: ["Nunito", "sans serif"],
        custom6: ['Playfair Display', 'serif'],
        custom7: ["Zilla Slab Highlight", "cursive"],
      },
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
        yellow: {
          lightYellow: "#f0e0a2",
        },
        purple: {
          lilac: "#beafd3",
        },
        green: {
          lightGreen: "#5dc5cd",
        },
        pink: {
          salmon: "#fed1be",
        },
        blue: {
          light: "#abe1fd",
        },
        yellow: {
          extralight: "#fefdfc"
        }
      },

      height: {
        sm: "1250px",
        lg:"950px",
        xs: "1000px",
      },

      lineHeight: {
         'extra-loose': '2.5',
         '12': '3rem',
         '15': '6rem'
        },

      backgroundImage: {
        "hero-bg": "url('/background.gif')",
        "hero-bg2": "url('/background2.gif')",
        "hero-bg3": "url('/background3.png')",
        "hero-bg4": "url('/squared.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};