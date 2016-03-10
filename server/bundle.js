import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import wpConfig  from '../webpack.config.js';
import config from '../config';
import path from 'path';

const bundle = () => {

  // First we fire up Webpack an pass in the configuration we
  var bundleStart = null;
  var compiler = Webpack(wpConfig);

  // We give notice in the terminal when it starts bundling and
  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // http://localhost:3000/public -> http://localhost:8080/public
    publicPath: `/${config.WP_DEV_DIR}/`,

    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(config.WP_PORT, config.WP_URL.replace("http://", ""), () => {
    console.log('Bundling project, please wait...');
  });

};

export default bundle;
