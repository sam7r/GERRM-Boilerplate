import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import bundle from './bundle';
import { MongoClient } from 'mongodb';
import config from '../config';

let db;
let app = express();
let proxy = httpProxy.createProxyServer({ changeOrigin: true });

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

app.use(express.static(config.publicFolder));

MongoClient.connect(`${config.mongoUrl}`, (err, database) => {
  if (err) throw err;
  db = database; // Connect to database
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

app.get('/data/test', (req, res) => {
  db.collection(config.mongoCollection).find({}).toArray((err, items) => {
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
