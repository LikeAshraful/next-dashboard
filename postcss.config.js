module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'is-pseudo-class': false
      }
    }
  }
}
