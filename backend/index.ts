/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as express from 'express';
import * as cors from 'cors';

import expressPlayground from 'graphql-playground-middleware-express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { config as dotEnvConfig } from 'dotenv';

import { typeDefs } from './graphql/typeDefs/typeDefs';
import { resolvers } from './graphql/resolvers/resolvers';
import { Context } from './graphql/context';


dotEnvConfig();

const port = 4000;

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const context = new Context();
const schema = makeExecutableSchema({ resolvers, typeDefs });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context,
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
