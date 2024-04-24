const autoprefixer = require('autoprefixer');
const customMedia = require('postcss-custom-media');
const nested = require('postcss-nested');


module.exports = {
  plugins: [
    autoprefixer,
    customMedia,
    nested
  ]
}