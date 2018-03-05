const webpack = require('webpack'); // eslint-disable-line

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist', // eslint-disable-line
    filename: './bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: './dist',
  },
  module: {
    loaders: [{
      test: /.js?$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
};
