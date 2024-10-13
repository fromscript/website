module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
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
