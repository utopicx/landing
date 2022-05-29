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
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
