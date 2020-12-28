const withImages = require('next-images')
const withLess = require('@zeit/next-less')
module.exports = withImages(
  {
    images: {
      domains: [''],
    },
    webpack(config, options) {
      return config
    }
  },
  withLess(),
  {
    "pagesDir": './src/pages'
  }
)


