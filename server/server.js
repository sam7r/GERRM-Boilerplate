import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import bundle from './bundle';

const config = {
  publicFolder: path.join(__dirname, '..', 'public')
};

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.use(express.static(config.publicFolder));

if (!isProduction) {

  bundle();
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
