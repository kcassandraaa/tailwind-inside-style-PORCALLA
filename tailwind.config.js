/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b8b83",
        secondary: "#cfa584",
        semilight: "#d9d9d9",
      },
      fontFamily: {
        truculenta: "Truculenta",
      },
    },
  },
  plugins: [],
};
