var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    './client/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
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
