var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000,
  },
};