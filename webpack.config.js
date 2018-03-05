const webpack = require('webpack'); // eslint-disable-line
const nodeENV = process.env.NODE_ENV || 'production'; // eslint-disable-line

module.exports = {
  devtool: 'source-map',
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
