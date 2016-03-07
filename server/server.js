import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import bundle from './bundle';
import mongoose from 'mongoose';
import config from '../config';

let db;
let app = express();
let proxy = httpProxy.createProxyServer({ changeOrigin: true });

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

app.use(express.static(config.publicFolder));

mongoose.connect(config.mongoUrl, (err) => {
  if (err) throw err;
  console.log('Connected to database...');
});

if (!isProduction) {
  /*
    Using proxy we are able to use the files served from Webpack
    enabling Hot Reload for faster development
  */
  bundle();
  app.all(`/${config.webPackDevFolder}/*`, function (req, res) {
    proxy.web(req, res, {
      // Virtual assets folder mapped to webpack dev server
      target: config.webPackServer
    });
  });
}

app.get(`/data/${config.mongoCollection}`, (req, res) => {
  mongoose.connection.collection(config.mongoCollection).find({}).toArray((err, items) => {
    if(err) throw err;
    res.json(items);
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
