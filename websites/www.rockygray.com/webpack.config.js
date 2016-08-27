var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist', 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      TweenMax: 'gsap/src/uncompressed/TweenMax',
      TweenLite: 'gsap/src/uncompressed/TweenLite',
      TimelineLite: 'gsap/src/uncompressed/TimelineLite',
      TimelineMax: 'gsap/src/uncompressed/TimelineMax',
      EasePack: 'gsap/src/uncompressed/easing/EasePack',
      CSSPlugin: 'gsap/src/uncompressed/plugins/CSSPlugin',
    }
  }
};
