import fs from 'fs';
import path from 'path';
import { getSchema } from '@risingstack/graffiti-mongoose';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import schema from '../data/schema';

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  const result = await (graphql(schema, introspectionQuery));
  if (result.errors) {
    console.error( // eslint-disable-line no-console
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    console.log("Writing schema.json...");
    fs.writeFileSync(
      path.join(__dirname, '../data/schema/schema.json'),
      JSON.stringify(result, null, 2)
    );
    console.log("schema.json updated");
  }
})();

// Save user readable type system shorthand of schema
console.log("Writing schema.graphql...");
fs.writeFileSync(
  path.join(__dirname, '../data/schema/schema.graphql'),
  printSchema(schema)
);

console.log("schema.graphql updated");
