module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto sans', 'sans-serif'],
      },
      colors: {
        'theme-black': '#151515',
      }
    },
  },
  plugins: [],
}
