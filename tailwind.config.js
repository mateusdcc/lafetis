/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      fontFamily: {
        'alumni': ['Alumni Sans Inline One', 'cursive'],
        'bebas': ['Bebas Neue', 'cursive'],
        'oleo': ['Oleo Script Swash Caps', 'sans-serif'],
        'bitter': ['Bitter', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
