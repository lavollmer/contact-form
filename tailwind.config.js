module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-lighter": "hsl(148, 38%, 91%)",
        "green-medium": "hsl(169, 82%, 27%)",
        "red-design": "hsl(0, 66%, 54%)",
        "grey-medium": "hsl(186, 15%, 59%)",
        "grey-dark": "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        "karla":["karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
