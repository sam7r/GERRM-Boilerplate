import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import bundle from './bundle';
import { MongoClient } from 'mongodb';

const config = {
  publicFolder: path.join(__dirname, '..', 'public'),
  /*
    If accessing locally use Docker container ACCESS URL
    If accessing from another container user port 27017
  */
  mongoUrl: 'mongodb://192.168.99.100:32771',
  mongoCollection: 'test'
};

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
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
      // Virtual assets folder mapped to webpack dev server
      target: 'http://localhost:8080'
    });
  });
}

app.get('/data/test', (req, res) => {
  db.collection(config.mongoCollection).find({}).toArray((err, test) => {
    if(err) throw err;
    res.json(test);
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
