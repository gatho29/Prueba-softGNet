module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-blue': 'rgb(59 130 246)',
        'color-gray': 'rgb(107 114 128)',
        'color-red': 'rgb(239 68 68)'
      }
    },
  },
  variants: {},
  plugins: [],
}
