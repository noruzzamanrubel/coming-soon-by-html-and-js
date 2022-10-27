module.exports = {
  mode: 'jit',
  content: [
    "*.html",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto Mono', 'monospace'],
    },
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1024px',
      'xl': '1170px',
    },
    container: {
      center: true,
      padding: '0.938rem',
    },
    extend: {
    },
  },
  plugins: [],
}