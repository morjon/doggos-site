module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      custom: ["Dosis", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
