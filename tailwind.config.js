// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // or "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        monto:['Montserrat'],
        lato: ['Lato', 'sans-serif'],
        roboto:['Roboto','sans-serif']
      },
    },
  },
  plugins: [],
};
