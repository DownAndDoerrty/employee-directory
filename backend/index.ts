
import express from 'express';
import expressPlayground from 'graphql-playground-middleware-express';
import * as core from 'express-serve-static-core';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { config as dotEnvConfig } from 'dotenv';

import { typeDefs } from './graphql/typeDefs/typeDefs';
import { resolvers } from './graphql/resolvers/resolvers';


dotEnvConfig();

const port = 4000;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const app = express() as core.Express;

const schema = makeExecutableSchema({ resolvers, typeDefs });

app.use(
  '/graphql',
  void graphqlHTTP({
    schema,
  }),
);

app.get(
  '/playground',
  expressPlayground({
    endpoint: '/graphql/',
  }),
);

app.listen(port, () => {
  console.log(
    `Serving the GraphQL Playground on http://localhost:${port}/playground`,
  );
});
