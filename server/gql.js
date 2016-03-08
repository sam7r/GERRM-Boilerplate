import express from 'express';
import graffiti from '@risingstack/graffiti';
import { getSchema } from '@risingstack/graffiti-mongoose';
import { json } from 'body-parser';
import schema from '../data/schema';
import config from '../config';

const graphql = () => {

  let app = express();
  const port = config.graphqlPort;

  app.use(json());

  app.use(graffiti.express({
    schema
  }));

  app.listen(port, function () {
    console.log('GraphQL server running on port ' + port);
  });

}

export default graphql;
