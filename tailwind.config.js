/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //backgroundImage: { heroImg: "url('./assets/img/hero.png')" },
    },
    colors: {
      main: "#181818",
      header: "#AF4A80",
      switch: "#7F56D9",
      switchLight: "#f1edf7",
      textColor: "#333333",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },

  plugins: [],
};
