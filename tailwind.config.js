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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
