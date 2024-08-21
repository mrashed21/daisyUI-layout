/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif', 'system-ui',],
      
    },
    screens: {

      'mobile': '480px',
      // => @media (min-width: 480px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

