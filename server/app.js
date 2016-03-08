import express from 'express';
import httpProxy from 'http-proxy';
import bundle from './bundle';
import config from '../config';

const app = () => {

  let app = express();
  let proxy = httpProxy.createProxyServer({ changeOrigin: true });

  const isProduction = process.env.NODE_ENV === 'production';
  const port = isProduction ? process.env.PORT : config.appServerPort;

  app.use(express.static(config.publicFolder));

  if (!isProduction) {
    /*
      Using proxy we are able to use the files served from Webpack
      enabling Hot Reload for faster development
    */
    bundle();
    app.all(`/${config.webPackDevFolder}/*`, function (req, res) {
      proxy.web(req, res, {
        // Virtual assets folder mapped to webpack dev server
        target: `${config.webPackServer}:${config.webPackPort}`
      });
    });
  }

  app.all(`/graphql`, function (req, res) {
    proxy.web(req, res, {
      // GraphQL data endpoint proxy
      target: `${config.graphqlServer}:${config.graphqlPort}`
    });
  });

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...', e);
  });

  app.listen(port, function () {
    console.log('App server running on port ' + port);
  });

};

export default app;
