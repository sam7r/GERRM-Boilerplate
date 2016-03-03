import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import bundle from './bundle';
import { MongoClient } from 'mongodb';
import mongoTestSetup from './mongoTestSetup';

const config = {
  publicFolder: path.join(__dirname, '..', 'public'),
  // If accessing through a Docker container use ACCESS URL
  mongoUrl: 'mongodb://192.168.99.100:32770',
  mongoCollection: 'test' // Collection name to create for test data
};

let db;
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

app.use(express.static(config.publicFolder));

if (!isProduction) {
  mongoTestSetup(config.mongoUrl, config.mongoCollection);
}

MongoClient.connect(`${config.mongoUrl}`, (err, database) => {
  if (err) throw err;
  db = database;
});

if (!isProduction) {

  let proxy = httpProxy.createProxyServer({ changeOrigin: true });
  bundle();
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

  app.get('/data/test', (req, res) => {
    db.collection(config.mongoCollection).find({}).toArray((err, test) => {
      if(err) throw err;
      console.log(test);
      res.json(test);
    });
  });

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

}

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
