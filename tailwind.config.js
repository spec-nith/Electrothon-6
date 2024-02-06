/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        def200: "#def200",
        "23A3FF": "#23A3FF",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
