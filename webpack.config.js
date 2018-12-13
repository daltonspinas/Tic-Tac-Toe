const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './client'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    uws: "uws"
  },
  node: {
    fs: 'empty',
    net: 'empty'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        // exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        use: 'babel-loader'
      }
    ]
  }
}