/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        utopicx: {
          yellow: "#FFDA33",
          cyan: "#24E2DD",
          magenta: "#FF3972",
          "gray-dark": "#222222",
        },
      },
      rotate: {
        120: "120deg",
        240: "240deg",
        360: "360deg",
      },
      boxShadow: {
        full: "0px 0px 13px 2px rgba(0,0,0,0.75)",
      },
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        "balance-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-2rem)" },
        },
        "balance-x": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-2px)" },
        },
        balance: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "50%": { transform: "translateX(-24px) translateY(-2rem)" },
        },
        "balance-rotate": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
