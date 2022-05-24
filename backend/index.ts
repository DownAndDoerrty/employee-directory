/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as express from 'express';
import * as cors from 'cors';
import expressPlayground from 'graphql-playground-middleware-express';
import { graphqlHTTP } from 'express-graphql';
import { config as dotEnvConfig } from 'dotenv';

import { Context } from './graphql/context';
import { graphQLSchema as schema } from './graphql/schema';

dotEnvConfig();
const context = new Context();
const port = 4000;
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
