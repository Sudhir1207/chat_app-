/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grp: ["Gruppo", "sans-serif"],
        rkt: ["Rokkitt", "serif"],
        cav: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [daisyui, require("tailwind-scrollbar")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro"],
  },
};
