module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#efeeea',
        blue: {
          '500': '#5594ab',
          '700': '#1c4256',
          '800': '#071827',
        }
      },
      fontFamily: {
        'brockmann': ['Brockmann', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
