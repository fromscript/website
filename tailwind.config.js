module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scroll: 'scroll 20s linear infinite'
      },
      colors: {
        red: {
          '100': '#fef3f2',
        },
        black: '#000000',
        white: '#ffffff',
        blue: {
          '500': '#64a8c5',
          '700': '#174256',
          '800': '#071827',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'], // Default font
        brockmann: ['Brockmann', 'sans-serif'], // Specific use font
      }
    },
  },
  plugins: [],
}
