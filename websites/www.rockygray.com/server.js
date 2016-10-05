const path = require('path');
const express = require('express');
const config = require('./webpack.config');

const app = express();
const port = process.env.PORT || 5000;

const environment = process.env.NODE_ENV || 'development';

console.info('Starting server for %s environment', environment);

if (environment === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('Setting up dist static directory');
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.use('/img', express.static(path.join(__dirname, 'client', 'img')));
app.use(express.static(path.join(__dirname, 'dist', 'static', 'favicons')));
app.use((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info("==> 🌎Listening on port %s in %s. Open up http://localhost:%s/ in your browser.", port, environment,  port);
  }
});
